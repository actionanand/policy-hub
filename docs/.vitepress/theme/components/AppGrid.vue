<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { apps, type AppPlatform } from '../../data/apps'
import AppCard from './AppCard.vue'

type PlatformFilter = AppPlatform | 'all'
type ReleaseFilter = 'all' | 'released' | 'unreleased'
type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end'

const pageSizes = [10, 25, 50, 100] as const
const query = ref('')
const platformFilter = ref<PlatformFilter>('android')
const releaseFilter = ref<ReleaseFilter>('released')
const pageSize = ref<number>(10)
const currentPage = ref(1)

const filteredApps = computed(() => {
  const searchTerm = query.value.trim().toLocaleLowerCase()

  return apps.filter((app) => {
    if (platformFilter.value !== 'all' && app.platform !== platformFilter.value) {
      return false
    }

    if (platformFilter.value === 'android') {
      if (releaseFilter.value === 'released' && !app.releasedToPlayStore) return false
      if (releaseFilter.value === 'unreleased' && app.releasedToPlayStore) return false
    }

    return (
      !searchTerm ||
      `${app.name} ${app.shortDescription}`
        .toLocaleLowerCase()
        .includes(searchTerm)
    )
  })
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredApps.value.length / pageSize.value))
)
const pageStart = computed(() => (currentPage.value - 1) * pageSize.value)
const visibleApps = computed(() =>
  filteredApps.value.slice(pageStart.value, pageStart.value + pageSize.value)
)
const firstResult = computed(() =>
  filteredApps.value.length ? pageStart.value + 1 : 0
)
const lastResult = computed(() =>
  Math.min(pageStart.value + pageSize.value, filteredApps.value.length)
)

const paginationItems = computed<PaginationItem[]>(() => {
  const total = totalPages.value
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1)

  const pages = [...new Set([1, total, currentPage.value - 1, currentPage.value, currentPage.value + 1])]
    .filter((page) => page >= 1 && page <= total)
    .sort((first, second) => first - second)
  const items: PaginationItem[] = []

  pages.forEach((page, index) => {
    const previous = pages[index - 1]
    if (previous && page - previous > 1) {
      items.push(previous === 1 ? 'ellipsis-start' : 'ellipsis-end')
    }
    items.push(page)
  })

  return items
})

watch([query, platformFilter, releaseFilter, pageSize], () => {
  currentPage.value = 1
})
watch(totalPages, (total) => {
  if (currentPage.value > total) currentPage.value = total
})

function selectPlatform(platform: PlatformFilter): void {
  platformFilter.value = platform
}

function goToPage(page: number): void {
  currentPage.value = Math.min(Math.max(page, 1), totalPages.value)
  document.querySelector('#app-directory-title')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function resetFilters(): void {
  query.value = ''
  platformFilter.value = 'android'
  releaseFilter.value = 'released'
  pageSize.value = 10
}
</script>

<template>
  <section class="app-directory" aria-labelledby="app-directory-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Application directory</p>
        <h2 id="app-directory-title">Find an app</h2>
      </div>
      <label class="app-filter">
        <span class="sr-only">Search applications</span>
        <span aria-hidden="true">⌕</span>
        <input
          v-model="query"
          type="search"
          placeholder="Search apps"
          autocomplete="off"
        />
      </label>
    </div>

    <div class="directory-controls">
      <fieldset class="filter-group">
        <legend>App category</legend>
        <div class="segmented-control">
          <button
            v-for="option in [
              { value: 'all', label: 'All' },
              { value: 'web', label: 'Web apps' },
              { value: 'android', label: 'Android apps' }
            ] as const"
            :key="option.value"
            type="button"
            :aria-pressed="platformFilter === option.value"
            @click="selectPlatform(option.value)"
          >
            {{ option.label }}
          </button>
        </div>
      </fieldset>

      <fieldset v-if="platformFilter === 'android'" class="filter-group">
        <legend>Play Store status</legend>
        <div class="segmented-control">
          <button
            v-for="option in [
              { value: 'released', label: 'Released' },
              { value: 'unreleased', label: 'Not released' },
              { value: 'all', label: 'All statuses' }
            ] as const"
            :key="option.value"
            type="button"
            :aria-pressed="releaseFilter === option.value"
            @click="releaseFilter = option.value"
          >
            {{ option.label }}
          </button>
        </div>
      </fieldset>

      <label class="page-size-control">
        <span>Apps per page</span>
        <select v-model.number="pageSize">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </label>
    </div>

    <div class="directory-summary" aria-live="polite">
      <p>
        <strong>{{ firstResult }}–{{ lastResult }}</strong>
        of {{ filteredApps.length }}
        {{ filteredApps.length === 1 ? 'application' : 'applications' }}
      </p>
      <button
        v-if="query || platformFilter !== 'android' || releaseFilter !== 'released' || pageSize !== 10"
        type="button"
        @click="resetFilters"
      >
        Reset filters
      </button>
    </div>

    <div v-if="visibleApps.length" class="app-grid">
      <AppCard v-for="app in visibleApps" :key="app.id" :app="app" />
    </div>
    <div v-else class="empty-state">
      <h3>No matching apps</h3>
      <p>Try a different search, category, or release status.</p>
      <button type="button" @click="resetFilters">Show released Android apps</button>
    </div>

    <nav
      v-if="filteredApps.length && totalPages > 1"
      class="app-pagination"
      aria-label="Application pages"
    >
      <button
        type="button"
        class="pagination-direction"
        :disabled="currentPage === 1"
        aria-label="Previous page"
        @click="goToPage(currentPage - 1)"
      >
        <span aria-hidden="true">←</span>
        <span>Previous</span>
      </button>

      <div class="pagination-pages">
        <template v-for="item in paginationItems" :key="item">
          <span v-if="typeof item !== 'number'" class="pagination-ellipsis" aria-hidden="true">…</span>
          <button
            v-else
            type="button"
            :class="{ 'is-current': currentPage === item }"
            :aria-current="currentPage === item ? 'page' : undefined"
            :aria-label="`Page ${item}`"
            @click="goToPage(item)"
          >
            {{ item }}
          </button>
        </template>
      </div>

      <button
        type="button"
        class="pagination-direction"
        :disabled="currentPage === totalPages"
        aria-label="Next page"
        @click="goToPage(currentPage + 1)"
      >
        <span>Next</span>
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  </section>
</template>

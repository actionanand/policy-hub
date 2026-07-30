<script setup lang="ts">
import { computed, ref } from 'vue'
import { apps } from '../../data/apps'
import AppCard from './AppCard.vue'

const query = ref('')

const filteredApps = computed(() => {
  const searchTerm = query.value.trim().toLocaleLowerCase()
  if (!searchTerm) return apps

  return apps.filter((app) =>
    `${app.name} ${app.shortDescription}`
      .toLocaleLowerCase()
      .includes(searchTerm)
  )
})
</script>

<template>
  <section class="app-directory" aria-labelledby="app-directory-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Application directory</p>
        <h2 id="app-directory-title">Find an app</h2>
      </div>
      <label class="app-filter">
        <span class="sr-only">Filter applications</span>
        <span aria-hidden="true">⌕</span>
        <input
          v-model="query"
          type="search"
          placeholder="Search apps"
          autocomplete="off"
        />
      </label>
    </div>

    <p class="result-count" aria-live="polite">
      {{ filteredApps.length }}
      {{ filteredApps.length === 1 ? 'application' : 'applications' }}
    </p>

    <div v-if="filteredApps.length" class="app-grid">
      <AppCard
        v-for="app in filteredApps"
        :key="app.id"
        :app="app"
      />
    </div>
    <div v-else class="empty-state">
      <h3>No matching apps</h3>
      <p>Try a different app name or keyword.</p>
      <button type="button" @click="query = ''">Clear search</button>
    </div>
  </section>
</template>

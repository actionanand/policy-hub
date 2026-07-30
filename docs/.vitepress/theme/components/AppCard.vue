<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import type { AppInfo } from '../../data/apps'

const props = defineProps<{ app: AppInfo }>()
const iconFailed = ref(false)

const initials = computed(() =>
  props.app.name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
)
</script>

<template>
  <article class="app-card">
    <div class="app-card__heading">
      <div class="app-icon" aria-hidden="true">
        <img
          v-if="app.icon && !iconFailed"
          :src="withBase(app.icon)"
          alt=""
          @error="iconFailed = true"
        />
        <span v-else>{{ initials }}</span>
      </div>
      <div>
        <h3>
          <a :href="withBase(`/apps/${app.id}/`)">{{ app.name }}</a>
        </h3>
        <p>{{ app.shortDescription }}</p>
      </div>
    </div>

    <div class="app-card__links" :aria-label="`${app.name} resources`">
      <a
        v-for="document in app.documents"
        :key="document.id"
        :href="withBase(document.portalUrl)"
      >
        {{ document.navLabel || document.label }}
      </a>
    </div>
  </article>
</template>

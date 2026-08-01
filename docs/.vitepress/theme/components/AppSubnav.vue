<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { getApp } from '../../data/apps'

const props = defineProps<{ appId: string }>()
const route = useRoute()
const app = computed(() => getApp(props.appId))

const links = computed(() => {
  if (!app.value) return []
  return [
    { label: 'Overview', href: `/apps/${app.value.id}/` },
    {
      label: 'Store listing',
      href: `/apps/${app.value.id}/store-listings`
    },
    {
      label: 'Release notes',
      href: `/apps/${app.value.id}/release-notes`
    },
    ...app.value.documents.map((document) => ({
      label: document.navLabel || document.label,
      href: document.portalUrl
    }))
  ]
})

function isCurrent(href: string): boolean {
  const current = route.path.replace(/\/$/, '')
  return current === href.replace(/\/$/, '')
}
</script>

<template>
  <nav v-if="app" class="app-subnav" :aria-label="`${app.name} pages`">
    <a
      v-for="link in links"
      :key="link.href"
      :href="withBase(link.href)"
      :aria-current="isCurrent(link.href) ? 'page' : undefined"
    >
      {{ link.label }}
    </a>
  </nav>
</template>

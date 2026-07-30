<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import type { AppInfo } from '../../data/apps'

const props = defineProps<{ app: AppInfo }>()

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
        <img v-if="app.icon" :src="withBase(app.icon)" alt="" />
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
      <a :href="withBase(app.privacyUrl)">Privacy</a>
      <a v-if="app.termsUrl" :href="withBase(app.termsUrl)">Terms</a>
      <a v-if="app.supportUrl" :href="withBase(app.supportUrl)">Support</a>
      <a
        v-if="app.dataDeletionUrl"
        :href="withBase(app.dataDeletionUrl)"
      >
        Data deletion
      </a>
    </div>
  </article>
</template>

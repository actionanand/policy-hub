<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { getApp } from '../../data/apps'
import AppBreadcrumbs from './AppBreadcrumbs.vue'
import AppSubnav from './AppSubnav.vue'
import ExternalLinkButton from './ExternalLinkButton.vue'

const props = defineProps<{ appId: string }>()
const app = computed(() => getApp(props.appId))
const initials = computed(() =>
  app.value
    ? app.value.name
        .split(/\s+/)
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : ''
)
</script>

<template>
  <div v-if="app" class="app-overview">
    <AppBreadcrumbs :app-id="app.id" current="Overview" />
    <AppSubnav :app-id="app.id" />

    <header class="app-overview__hero">
      <div class="app-icon app-icon--large" aria-hidden="true">
        <img v-if="app.icon" :src="withBase(app.icon)" alt="" />
        <span v-else>{{ initials }}</span>
      </div>
      <div>
        <p class="eyebrow">App information</p>
        <h1>{{ app.name }}</h1>
        <p>{{ app.shortDescription }}</p>
      </div>
    </header>

    <section aria-labelledby="legal-support-heading">
      <h2 id="legal-support-heading">Legal and support</h2>
      <div class="resource-grid">
        <a class="resource-card" :href="withBase(app.privacyUrl)">
          <span class="resource-card__icon" aria-hidden="true">§</span>
          <span>
            <strong>Privacy Policy</strong>
            <small>How information is handled</small>
          </span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          v-if="app.termsUrl"
          class="resource-card"
          :href="withBase(app.termsUrl)"
        >
          <span class="resource-card__icon" aria-hidden="true">✓</span>
          <span>
            <strong>Terms and Conditions</strong>
            <small>Rules for using the app</small>
          </span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          v-if="app.supportUrl"
          class="resource-card"
          :href="withBase(app.supportUrl)"
        >
          <span class="resource-card__icon" aria-hidden="true">?</span>
          <span>
            <strong>Support</strong>
            <small>Help and contact options</small>
          </span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          v-if="app.dataDeletionUrl"
          class="resource-card"
          :href="withBase(app.dataDeletionUrl)"
        >
          <span class="resource-card__icon" aria-hidden="true">×</span>
          <span>
            <strong>Data Deletion</strong>
            <small>Delete app data safely</small>
          </span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section
      v-if="app.playStoreUrl || app.githubUrl"
      aria-labelledby="official-links-heading"
    >
      <h2 id="official-links-heading">Official links</h2>
      <div class="button-row">
        <ExternalLinkButton
          v-if="app.playStoreUrl"
          :href="app.playStoreUrl"
          label="View on Google Play"
          variant="primary"
        />
        <ExternalLinkButton
          v-if="app.githubUrl"
          :href="app.githubUrl"
          label="View on GitHub"
          variant="secondary"
        />
      </div>
    </section>
  </div>

  <div v-else class="empty-state">
    <h1>Application not found</h1>
    <p>Check the app ID in the page component.</p>
  </div>
</template>

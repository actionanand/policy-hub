<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { getApp } from '../../data/apps'
import AppBreadcrumbs from './AppBreadcrumbs.vue'
import AppSubnav from './AppSubnav.vue'
import ExternalLinkButton from './ExternalLinkButton.vue'

const props = defineProps<{ appId: string }>()
const app = computed(() => getApp(props.appId))
const iconFailed = ref(false)
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
        <img
          v-if="app.icon && !iconFailed"
          :src="withBase(app.icon)"
          alt=""
          @error="iconFailed = true"
        />
        <span v-else>{{ initials }}</span>
      </div>
      <div>
        <p class="eyebrow">App information</p>
        <h1>{{ app.name }}</h1>
        <p>{{ app.shortDescription }}</p>
        <div class="app-overview__badges">
          <span class="app-badge">{{ app.platform === 'android' ? 'Android app' : 'Web app' }}</span>
          <span
            v-if="app.platform === 'android'"
            class="app-badge"
            :class="app.releasedToPlayStore ? 'is-released' : 'is-unreleased'"
          >
            {{ app.releasedToPlayStore ? 'Released on Google Play' : 'Not released on Google Play' }}
          </span>
        </div>
      </div>
    </header>

    <section aria-labelledby="legal-support-heading">
      <h2 id="legal-support-heading">Legal and support</h2>
      <div class="resource-grid">
        <a
          v-for="document in app.documents"
          :key="document.id"
          class="resource-card"
          :href="withBase(document.portalUrl)"
        >
          <span class="resource-card__icon" aria-hidden="true">
            {{ document.symbol }}
          </span>
          <span>
            <strong>{{ document.label }}</strong>
            <small>{{ document.shortDescription }}</small>
          </span>
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>

    <section aria-labelledby="publishing-heading">
      <h2 id="publishing-heading">Google Play publishing</h2>
      <div class="resource-grid">
        <a
          class="resource-card"
          :href="withBase(`/apps/${app.id}/store-listings`)"
        >
          <span class="resource-card__icon" aria-hidden="true">A</span>
          <span>
            <strong>Store listing</strong>
            <small>Copy the short and full descriptions</small>
          </span>
          <span aria-hidden="true">-&gt;</span>
        </a>
        <a
          class="resource-card"
          :href="withBase(`/apps/${app.id}/release-notes`)"
        >
          <span class="resource-card__icon" aria-hidden="true">R</span>
          <span>
            <strong>Release notes</strong>
            <small>Format localized notes for Play Console</small>
          </span>
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>

    <section
      v-if="app.playStoreUrl || app.webLinks?.length || app.githubUrl"
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
          v-for="webLink in app.webLinks"
          :key="webLink.url"
          :href="webLink.url"
          :label="webLink.label"
          variant="secondary"
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

<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, ref } from 'vue'
import { getApp } from '../../data/apps'
import { getStoreListing } from '../../data/store-listings'
import ListingTextField from './ListingTextField.vue'

const props = defineProps<{ appId: string }>()
const app = computed(() => getApp(props.appId))
const listing = computed(() => getStoreListing(props.appId))
const iconFailed = ref(false)

</script>

<template>
  <div v-if="app && listing" class="store-listings">
    <article class="store-listing-card">
      <header class="store-listing-card__header">
        <img
          v-if="app.icon && !iconFailed"
          class="store-listing-card__icon"
          :src="withBase(app.icon)"
          :alt="`${app.name} icon`"
          @error="iconFailed = true"
        />
        <span v-else class="store-listing-card__fallback" aria-hidden="true">
          {{ app.name.charAt(0) }}
        </span>
        <div>
          <p class="store-listing-card__eyebrow">
            {{ app.platform === 'android' ? 'Google Play listing' : 'Publishing descriptions' }}
          </p>
          <h2>{{ app.name }}</h2>
        </div>
      </header>

      <ListingTextField
        label="Short description"
        :limit="80"
        :rows="2"
        :value="listing.shortDescription"
      />
      <ListingTextField
        label="Full description"
        :limit="4000"
        :rows="14"
        :value="listing.fullDescription"
      />
    </article>
  </div>

  <div v-else class="empty-state">
    <h2>Descriptions not found</h2>
    <p>Check the app ID and add its descriptions to the listing data.</p>
  </div>
</template>

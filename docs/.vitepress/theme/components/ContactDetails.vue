<script setup lang="ts">
import { siteSettings } from '../../data/site'
</script>

<template>
  <dl class="contact-list">
    <div>
      <dt>Developer</dt>
      <dd>{{ siteSettings.developerName }}</dd>
    </div>
    <div>
      <dt>General support</dt>
      <dd>
        <a :href="`mailto:${siteSettings.generalSupportEmail}`">
          {{ siteSettings.generalSupportEmail }}
        </a>
      </dd>
    </div>
    <div>
      <dt>Privacy enquiries</dt>
      <dd>
        <a :href="`mailto:${siteSettings.privacyEmail}`">
          {{ siteSettings.privacyEmail }}
        </a>
      </dd>
    </div>
    <div v-if="siteSettings.githubUrl">
      <dt>GitHub</dt>
      <dd>
        <a
          :href="siteSettings.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer profile <span aria-hidden="true">↗</span>
        </a>
      </dd>
    </div>
    <div v-if="siteSettings.playStoreDeveloperUrl">
      <dt>Google Play</dt>
      <dd>
        <a
          :href="siteSettings.playStoreDeveloperUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer profile <span aria-hidden="true">↗</span>
        </a>
      </dd>
    </div>
  </dl>
</template>

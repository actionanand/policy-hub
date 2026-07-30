<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { getApp } from '../../data/apps'

const props = defineProps<{
  appId?: string
  current?: string
}>()

const app = computed(() => (props.appId ? getApp(props.appId) : undefined))
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li><a :href="withBase('/')">Home</a></li>
      <li><a :href="withBase('/apps/')">Apps</a></li>
      <li v-if="app">
        <a :href="withBase(`/apps/${app.id}/`)">{{ app.name }}</a>
      </li>
      <li v-if="current" aria-current="page">{{ current }}</li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <a
    class="external-button"
    :class="variant === 'primary' ? 'is-primary' : 'is-secondary'"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`${label} (opens in a new tab)`"
  >
    <span>{{ label }}</span>
  </a>
</template>

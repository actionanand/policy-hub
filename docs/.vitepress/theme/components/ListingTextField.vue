<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps<{
  label: string
  value: string
  limit: number
  rows?: number
}>()

const textarea = ref<HTMLTextAreaElement>()
const status = ref('')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const characterCount = computed(() => props.value.length)

async function copyText() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.value)
    } else {
      if (!textarea.value) throw new Error('Text field is unavailable')
      textarea.value.focus()
      textarea.value.select()
      if (!document.execCommand('copy')) throw new Error('Copy was rejected')
    }

    status.value = 'Copied'
  } catch {
    textarea.value?.focus()
    textarea.value?.select()
    status.value = 'Select the text and copy it manually'
  }

  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    status.value = ''
  }, 2500)
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <section class="listing-field">
    <div class="listing-field__header">
      <div>
        <h3>{{ label }}</h3>
        <span class="listing-field__count">
          {{ characterCount }} / {{ limit }} characters
        </span>
      </div>
      <button class="listing-copy-button" type="button" @click="copyText">
        {{ status === 'Copied' ? 'Copied' : 'Copy' }}
      </button>
    </div>
    <textarea
      ref="textarea"
      class="listing-field__text"
      :aria-label="`${label}, ${characterCount} of ${limit} characters`"
      :rows="rows || 5"
      :value="value"
      readonly
      spellcheck="false"
      @focus="textarea?.select()"
    />
    <span class="visually-hidden" aria-live="polite">{{ status }}</span>
  </section>
</template>

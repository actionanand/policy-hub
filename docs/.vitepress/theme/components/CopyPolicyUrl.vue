<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{ path: string }>()

const buttonText = ref('Copy Play Store URL')
const announcement = ref('')
const showFallback = ref(false)
const fallbackInput = ref<HTMLInputElement>()
let resetTimer: ReturnType<typeof setTimeout> | undefined

const inputId = computed(() => `policy-url-${props.path.replace(/\W/g, '-')}`)
const policyUrl = computed(() => {
  if (typeof window === 'undefined') return withBase(props.path)
  return new URL(withBase(props.path), window.location.origin).toString()
})

function legacyCopy(value: string): boolean {
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  let copied = false
  try {
    copied = document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
  return copied
}

function resetSuccessState() {
  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    buttonText.value = 'Copy Play Store URL'
    announcement.value = ''
  }, 2400)
}

async function copyPolicyUrl() {
  if (showFallback.value) {
    fallbackInput.value?.focus()
    fallbackInput.value?.select()
    return
  }

  let copied = false
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(policyUrl.value)
      copied = true
    }
  } catch {
    copied = false
  }

  if (!copied) {
    copied = legacyCopy(policyUrl.value)
  }

  if (copied) {
    buttonText.value = 'Play Store URL copied'
    announcement.value = 'Play Store URL copied to clipboard.'
    resetSuccessState()
    return
  }

  showFallback.value = true
  buttonText.value = 'Select Play Store URL'
  announcement.value =
    'Automatic copy is unavailable. The Play Store URL is ready to select and copy.'
  await nextTick()
  fallbackInput.value?.focus()
  fallbackInput.value?.select()
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <div class="copy-policy">
    <button class="copy-policy__button" type="button" @click="copyPolicyUrl">
      <span aria-hidden="true">{{ buttonText.includes('copied') ? '✓' : '⧉' }}</span>
      {{ buttonText }}
    </button>
    <p class="sr-only" aria-live="polite">{{ announcement }}</p>
    <div v-if="showFallback" class="copy-policy__fallback">
      <label :for="inputId">Copy this URL manually</label>
      <input
        :id="inputId"
        ref="fallbackInput"
        :value="policyUrl"
        readonly
        @focus="fallbackInput?.select()"
      />
    </div>
  </div>
</template>

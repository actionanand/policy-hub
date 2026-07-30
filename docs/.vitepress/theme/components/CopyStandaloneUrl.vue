<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(
  defineProps<{
    path: string
    label?: string
    copiedLabel?: string
    documentName?: string
  }>(),
  {
    label: 'Copy standalone URL',
    copiedLabel: 'Standalone URL copied',
    documentName: 'standalone document'
  }
)

const buttonText = ref(props.label)
const announcement = ref('')
const showFallback = ref(false)
const fallbackInput = ref<HTMLInputElement>()
const isCopied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

const inputId = computed(
  () => `standalone-url-${props.path.replace(/\W/g, '-')}`
)
const standaloneUrl = computed(() => {
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
    buttonText.value = props.label
    announcement.value = ''
    isCopied.value = false
  }, 2400)
}

async function copyStandaloneUrl() {
  if (showFallback.value) {
    fallbackInput.value?.focus()
    fallbackInput.value?.select()
    return
  }

  let copied = false
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(standaloneUrl.value)
      copied = true
    }
  } catch {
    copied = false
  }

  if (!copied) {
    copied = legacyCopy(standaloneUrl.value)
  }

  if (copied) {
    isCopied.value = true
    buttonText.value = props.copiedLabel
    announcement.value = `${props.documentName} URL copied to clipboard.`
    resetSuccessState()
    return
  }

  showFallback.value = true
  buttonText.value = 'Select standalone URL'
  announcement.value =
    `Automatic copy is unavailable. The ${props.documentName} URL is ready ` +
    'to select and copy.'
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
    <button
      class="copy-policy__button"
      type="button"
      @click="copyStandaloneUrl"
    >
      <span aria-hidden="true">{{ isCopied ? 'OK' : 'URL' }}</span>
      {{ buttonText }}
    </button>
    <p class="sr-only" aria-live="polite">{{ announcement }}</p>
    <div v-if="showFallback" class="copy-policy__fallback">
      <label :for="inputId">Copy this URL manually</label>
      <input
        :id="inputId"
        ref="fallbackInput"
        :value="standaloneUrl"
        readonly
        @focus="fallbackInput?.select()"
      />
    </div>
  </div>
</template>

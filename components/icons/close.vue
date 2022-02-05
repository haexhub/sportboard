<template>
  <svg class='cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <title>{{ $t(title) }}</title>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String
  }
})
</script>
<template>
  <svg 
    class='stroke-current'
    :class='color'
    viewBox='0 0 24 24' 
    fill='none' 
    stroke-width='1' 
    stroke-linecap='square' 
    stroke-linejoin='miter'
  > 
    <title>
      {{ $t(title) }}
    </title> 
    <path d='M12 4L20 8.00004L12 12L4 8.00004L12 4Z'/> 
    <path d='M20 12L12 16L4 12'/> 
    <path d='M20 16L12 20L4 16'/>  
  </svg>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: String,
    title: String,
  },
})
</script>
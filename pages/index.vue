<template>
  <div class="bg-base-content flex flex-row flex-auto rounded-tl-xl border-l-1">
    <div class="w-2/5 lg:w-1/5 flex flex-col">
      <div class="h-24 bg-red-200 flex-none">
        top
      </div>

      <div class="overflow-y-auto flex-auto">
        <div v-for="i in 100" :key="i" class="h-16 bg-yellow-300">
          {{ i }}
        </div>
      </div>
    </div>
    <div class="w-3/5 lg:w-4/5">
      content
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

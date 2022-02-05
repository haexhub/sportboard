<template>
  <div
    class="flex flex-col items-center w-full h-10 justify-center transition duration-500 ease-in-out"
    :class="{ 'bg-base-100': _active === name }"
    @click="onClick"
  >
    <div
      class="rounded-full w-8 h-8 flex cursor-pointer justify-center items-center stroke-current text-secondary hover:scale-110 hover:text-secondary-focus transform"
      :class="{
        'stroke-current': _active === name,
        'text-secondary-focus': _active === name
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { get, sync } from "vuex-pathify";
import Vue from "vue";

export default Vue.extend({
  props: {
    name: String
  },

  computed: {
    _active: sync("navbar/active") as any,
    _showSidebarMenu: sync("sidebar/visible") as any,
    _itemColor: get("navbar/itemColor") as any
  },

  methods: {
    onClick() {
      this._showSidebarMenu = true;
    }
  }
});
</script>

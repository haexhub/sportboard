<template>
  <div>
    <div class="flex flex-row h-screen bg-base-100">
      <navbar-menu class="bg-base-100"> </navbar-menu>

      <sidebar-menu />

      <div
        class="flex flex-auto bg-base-content rounded-tl-xl overflow-hidden shadow-xl border-l-1"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/assets/css/customTheme.css";
import { sync } from "vuex-pathify";
import IconClose from "@/components/icons/close.vue";
import NavbarMenu from "@/components/navbar/menu.vue";
import SidebarMenu from "@/components/sidebar/menu.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconClose,
    NavbarMenu,
    SidebarMenu
  },

  computed: {
    showSideMenu: sync("sidemenu/showSideMenu")
  },

  data: () => ({})
});
</script>

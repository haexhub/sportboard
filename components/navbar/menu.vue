<template>
  <div class="flex flex-col justify-between items-center w-16 py-4 bg-base-200">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex flex-col items-center w-full h-10 justify-center">
        <nuxt-link to="/">
          <icon-logo />
        </nuxt-link>
      </div>

      <navbar-item name="overview">
        <icon-layers
          class="w-7 h-7"
          title="navbar.overview.label"
          @click.native="navigate('overview', 'navbar.overview.label')"
        />
      </navbar-item>
    </div>

    <div class="flex flex-col w-full space-y-4">
      <navbar-item name="settings">
        <icon-settings
          class="w-7 h-7"
          title="navbar.settings.label"
          @click.native="navigate('settings', 'navbar.settings.label')"
        />
      </navbar-item>

      <navbar-item name="account">
        <icon-account
          class="w-7 h-7"
          title="navbar.account.label"
          @click.native="navigate('account', 'navbar.account.label')"
        />
      </navbar-item>
    </div>
  </div>
</template>

<script lang="ts">
import { sync } from "vuex-pathify";
import IconAccount from "@/components/icons/account.vue";
import IconLayers from "@/components/icons/layers.vue";
import IconLogo from "@/components/icons/logo.vue";
import IconSettings from "@/components/icons/settings.vue";
import IconQuestionmark from "@/components/icons/questionmark.vue";
import NavbarItem from "@/components/navbar/item.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconAccount,
    IconLayers,
    IconLogo,
    IconSettings,
    IconQuestionmark,
    NavbarItem
  },

  computed: {
    showSideMenu: sync("sidebar/visible"),
    active: sync("navbar/active") as any,
    sidebarTitle: sync("sidebar/title") as any
  },

  methods: {
    showHome() {},

    navigate(destination: string, sidebarTitle: string) {
      this.active = destination;
      this.sidebarTitle = sidebarTitle;
    }
  }
});
</script>

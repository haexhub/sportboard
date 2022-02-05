<template>
  <div 
    :class='{ 
      hidden: !showSideMenu ,
      "md:min-h-screen": showSideMenu
    }'
    class="rounded-lg shadow bg-neutral md:flex flex-col md:flex-row  w-full md:w-64 flex-shrink-0">
      <nav 
        class="flex flex-col w-full text-neutral-content"
      >
        
      </nav>
 
  </div>
</template>

<script lang="ts">
import { get } from 'vuex-pathify'
import SidemenuLink from '@/components/basic/sidemenu-link.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    SidemenuLink
  },

  computed: {
    showSideMenu: get('basic/showSideMenu')
  }
})
</script>
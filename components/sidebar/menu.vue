<template>
  
  <div 
    class='w-0 bg-base-100 transition-all duration-500 ease-in-out'
    :class='{ "w-64": showSideMenu }'
  >
    <div class='p-4'> <!-- Header -->
      <div class='flex justify-between items-center'>
        <h1 class='text-xl font-semibold'>
          {{ $t(sidebarTitle) }}
        </h1>
        <icon-close
          class='w-6 h-6'
          title='sidebar.close.label'
          @click.native='showSideMenu = false'
        />
      </div>

      <div> <!-- Menu -->
      </div>
    </div>
  </div>
  
</template>

<script lang='ts'>
import { get, sync } from 'vuex-pathify'
import IconClose from '@/components/icons/close.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    IconClose
  },

  props: {
    title: String
  },

  computed: {
    showSideMenu: sync('sidebar/visible'),
    sidebarTitle: get('sidebar@title'),
  }
})
</script>
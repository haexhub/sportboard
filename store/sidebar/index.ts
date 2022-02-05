import { make } from 'vuex-pathify'

export const state = () => ({
  title: '',
  visible: false,

  menu: {
    settings: {
      language_group: {
        label: 'sidebar.menu.'
      }
    }
  }
})

export const mutations = {
  ...make.mutations(state)
}
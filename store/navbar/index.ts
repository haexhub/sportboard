import { make } from 'vuex-pathify'

export const state = () => ({
  active: '',
})

export const mutations = {
  ...make.mutations(state)
}
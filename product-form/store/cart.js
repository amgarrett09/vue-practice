export const state = () => ({
  items: [],
  total: 0
})

export const mutations = {
  ADD(state, items) {
    state.items.push(...items)
  },
  REMOVE(state, itemsToRemove) {
    itemsToRemove.forEach(item => {
      state.items = state.items.filter(oldItem => oldItem.name !== item.name)
    })
  },
  SET_TOTAL(state) {
    state.total = state.items.reduce((acc, item) => acc + item.price, 0)
  }
}

export const actions = {
  addProducts({ commit }, items) {
    commit('ADD', items)
    commit('SET_TOTAL')
  },
  removeProducts({ commit }, items) {
    commit('REMOVE', items)
    commit('SET_TOTAL')
  }
}

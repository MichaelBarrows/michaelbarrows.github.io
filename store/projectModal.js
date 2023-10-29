export const state = () => ({
  project: {
    title: '',
    company: '',
    start_date: '',
    end_date: '',
    duration: {
      years: 0,
      months: 0
    },
    description: '',
    tech_stack: [],
  },
  display: false,
})

export const getters = {
  getRecord (state) {
    return state.record
  },
  getDisplay (state) {
    return state.display
  },
}

export const mutations = {
  setRecord (state, record) {
    state.record = record
  },
  hide (state) {
    state.display = false
    state.project = {
      title: '',
      company: '',
      start_date: '',
      end_date: '',
      description: '',
      tech_stack: []
    }
  },
  show (state) {
    state.display = true
  },
}

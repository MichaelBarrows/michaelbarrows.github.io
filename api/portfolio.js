import { apiGet, apiPost, successful } from './axios'

export const getEmployment = async () => {
  let data = {}
  let status
  await apiGet('employment')
    .then((response) => {
      status = successful(response)

      if (status) {
        data = response.data
      }
    })

  return { status, data }
}

export const getEducation = async () => {
  let data = {}
  let status
  await apiGet('education')
    .then((response) => {
      status = successful(response)

      if (status) {
        data = response.data
      }
    })

  return { status, data }
}

export const getProjects = async () => {
  let data = {}
  let status
  await apiGet('project')
    .then((response) => {
      status = successful(response)

      if (status) {
        data = response.data
      }
    })

  return { status, data }
}

export const submitForm = async (payload) => {
  let data = {}
  let status

  await apiPost('contact', payload)
    .then((response) => {
      status = successful(response)

      if (status) {
        data = response.data
      }
    })

  return { status, data }
}

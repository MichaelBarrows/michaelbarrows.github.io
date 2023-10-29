import axios from 'axios'

const wrapper = () => {
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  axios.defaults.headers.common['Content-Type'] = `application/json`
  return axios
}

const apiUrl = 'https://api.michaelbarrows.com/'

const apiGet = async (url) => {
  try {
    return await wrapper().get(apiUrl + url)
  } catch (error) {
    return handleError(error)
  }
}

const apiPost = async (url, data) => {
  try {
    return await wrapper().post(apiUrl + url, data)
  } catch (error) {
    return handleError(error)
  }
}

const handleError = (error) => {

}

const successful = (response) => {
  return ! hasError(response)
}

const hasError = (response) => {
  if (response?.error) {
    return true
  }

  return false
}

export { apiGet, apiPost, hasError, successful }

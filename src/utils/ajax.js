import {
  ajax
} from 'rxjs/observable/dom/ajax'
const getDefaultHeaders = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem('id_token') || null}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
}

export const get = (url, headers) =>
  ajax.get(url, { ...headers,
    ...getDefaultHeaders()
  })

export const post = (url, body, headers = {}) =>
  ajax.post(url, body, { ...headers,
    ...getDefaultHeaders()
  })

export const put = (url, body, headers = {}) =>
  ajax.put(url, body, { ...headers,
    ...getDefaultHeaders()
  })

export const del = (url, headers = {}) =>
  ajax.delete(url, { ...headers,
    ...getDefaultHeaders()
  })
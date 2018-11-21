export const API_ROOT = '/api/v0'


export function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}


export function linkTarget(url) {
  if (url.length < 4) {
    return '_blank'
  }
  if (url[0] === '/') {
    if (url[1] !== '/') {
      return ''
    }
  }
  return '_blank'
}

export const handleOver = (item, over, component) => () => {
  if (over) {
    component.setState({ over: item })
  } else {
    component.setState({ over: null })
  }
}


export const handleEdit = (item, edit, component) => () => {
  handleOver(item, false, component)()
  if (edit) {
    component.setState({ edit: item })
  } else {
    component.setState({ edit: null })
  }
}


export const handleValue = (item, component) => (event) => {
  const state = {}
  state[item] = event.target.value
  component.setState(state)
}

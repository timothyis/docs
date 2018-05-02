export const pageview = url => {
  window._gs('track', url)
}

export const event = (name, data) => {
  window._gs('event', name, data)
}

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './sass/app.scss'

Vue.config.productionTip = false

Vue.filter('slugify', (str) => {
  if (str) {
    // remove spaces
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:'
    var to = 'aaaaaeeeeeiiiiooooouuuunc------'

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes
  }

  return str
})

Vue.filter('formatVars', (str) => {
  if (str) {
    return str.replace(/([A-Z])/g, ' $1')
  }

  return str
})

Vue.filter('boolean', (str) => {
  if (str && str !== 'false') {
    return 'yes'
  }

  return 'no'
})

// allow <em> <strong> <b> <i> <br> <br/> <br />
Vue.filter('sanitize', (str) => {
  if (str) {
    // sanitize everything
    str = str.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    // allow whitelisted tags
    str = str.replace(/&lt;em&gt;/g, '<em>')
      .replace(/&lt;\/em&gt;/g, '</em>')
      .replace(/&lt;strong&gt;/g, '<strong>')
      .replace(/&lt;\/strong&gt;/g, '</strong>')
      .replace(/&lt;i&gt;/g, '<i>')
      .replace(/&lt;\/i&gt;/g, '</i>')
      .replace(/&lt;b&gt;/g, '<b>')
      .replace(/&lt;\/b&gt;/g, '</b>')
      .replace(/&lt;br&gt;/g, '<br>')
      .replace(/&lt;br\/&gt;/g, '<br>')
      .replace(/&lt;br \/&gt;/g, '<br>')
  }

  return str
})

Vue.filter('capitalize', (str) => {
  if (str) {
    str = str.replace(/\b\w/g, l => l.toUpperCase())
  }

  return str
})

Vue.filter('trim', (str, length) => {
  if (str) {
    return str.substring(0, length)
  }

  return str
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'


// fix for scroll when navigating to a new page to account for the fixed nav, make sure it stays to top
router.afterEach(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
})

createApp(App).use(router).mount('#app')

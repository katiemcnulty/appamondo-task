import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlePage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/article',
            name: 'Article',
            component: ArticlePage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage
        }
    ]
})

export default routes;
import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/layouts/Home.vue'
import Tickets from '/src/layouts/Tickets.vue'
import FAQ from '/src/layouts/FAQ.vue'
import History from '/src/layouts/History.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets,
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
    },
    {
        path: '/history',
        name: 'History',
        component: History,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
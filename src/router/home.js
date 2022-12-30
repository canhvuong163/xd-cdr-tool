import { createRouter, createWebHistory } from 'vue-router'

import OverView from '../components/OverView.vue'

const routes = [
    {
        //trang gioi thieu
        path: '/OverView', component: OverView,
    
    },
    {
        //trang landing
    
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
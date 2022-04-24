


const mainRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/main/HomeView.vue')

    },
    // {
    //     path: '/list-task',
    //     name: 'list-task',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/main/ListTask.vue')

    // },

]


export default mainRoutes

import HomeView from '../views/main/HomeView.vue'
import ListTask from '../views/main/ListTask.vue'


const mainRoutes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView

    },
    {
        path: '/list-task',
        name: 'list-task',
        component: ListTask
    },

]


export default mainRoutes

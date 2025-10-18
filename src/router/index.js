import { createRouter, createWebHistory } from 'vue-router'; 

const routes = [
    {
    path: '/notes',
    name: 'notes',
    component: () => import('../views/NotesView.vue'),
    },
    {
    path: '/kanban',
    name: 'Kanban',
    component: () => import('../views/KanbanView.vue'), 
    },
    {
    path: '/to-do',
    name: 'Todo',
    component: () => import('../views/ToDoView.vue'), 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
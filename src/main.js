import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import Tom from './pages/Tom.vue';
import Animation from './pages/AnimationPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: AllUsers},
        {path: '/goals', component: CourseGoals},
        {path: '/tom', component: Tom},
        {path: '/animationpage', component: Animation},
    ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function() {
    app.mount('#app');
})


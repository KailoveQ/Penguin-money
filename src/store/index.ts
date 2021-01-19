import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);
const router=[
    {
        path:'/',
        redirect:'/money'
    },
    {
        path:'/money',
        component:Money
    },
    {
        path:'/labels',
        component: Labels
    },
    {
        path:'/statistics',
        component: Statistics

    }
]

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
});

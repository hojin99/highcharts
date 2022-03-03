import Vue from 'vue';
import Router from 'vue-router';

import Basic from '@/components/basic/Basic.vue';


Vue.use(Router);

export default new Router({
    mode: 'abstract',
    base : __dirname,
    routes: [
        {name:'Basic', path:"/basic", component:Basic},

      ]
})
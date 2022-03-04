import Vue from 'vue';
import Router from 'vue-router';

import Basic from '@/components/basic/Basic.vue';
import Plot from '@/components/plot/Plot.vue';

Vue.use(Router);

export default new Router({
    mode: 'abstract',
    base : __dirname,
    routes: [
        {name:'Basic', path:"/basic", component:Basic},
        {name:'Plot', path:"/plot", component:Plot},

      ]
})
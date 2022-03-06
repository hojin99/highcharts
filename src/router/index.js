import Vue from 'vue';
import Router from 'vue-router';

import Basic from '@/components/basic/Basic.vue';
import Export from '@/components/basic/Export.vue';
import Stock from '@/components/stock/Stock.vue';
import Map from '@/components/map/Map.vue';
import Gant from '@/components/gant/Gant.vue';

Vue.use(Router);

export default new Router({
    mode: 'abstract',
    base : __dirname,
    routes: [
        {name:'Basic', path:"/basic", component:Basic},
        {name:'Export', path:"/export", component:Export},
        {name:'Stock', path:"/stock", component:Stock},
        {name:'Map', path:"/map", component:Map},
        {name:'Gant', path:"/gant", component:Gant},

      ]
})
// Import client startup through a single index entry point
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from './router.js';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

window.UIkit = UIkit;

// App layout
import AppLayout from '/imports/ui/AppLayout.vue';

// App start
Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();
  new Vue({
    router,
    render: h => h(AppLayout),
  }).$mount('#app');
});
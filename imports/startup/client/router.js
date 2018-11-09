// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
});

// Not found
import NotFound from '/imports/ui/pages/NotFound.vue';
import Routes from './routes.js';

RouterFactory.configure(router => {
  router.addRoute({
    path: '*',
    component: NotFound,
  });
  router.addRoutes(Routes);
}, -1);

export default routerFactory;
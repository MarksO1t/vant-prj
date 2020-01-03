import Vue from "vue";
import Router from "vue-router";
import routes from "../routerConfig";

Vue.use(Router);

const router  = new Router({
  // mode: "hash",
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //     return {
  //       x: 0,
  //       y: to.meta.savedPosition || 0
  //     };
  //   }
  // },
  routes: routes
})

// 页面刷新时，重新赋值token
// const _token = getToken();
// if (_token) {
//   store.commit("SET_TOKEN", _token);
// }
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// const router = new Router({
//   mode: "hash",
//   // scrollBehavior(to, from, savedPosition) {
//   //   if (savedPosition) {
//   //     return savedPosition;
//   //   } else {
//   //     if (from.meta.keepAlive) {
//   //       from.meta.savedPosition = document.body.scrollTop;
//   //     }
//   //     return {
//   //       x: 0,
//   //       y: to.meta.savedPosition || 0
//   //     };
//   //   }
//   // },
//   routes: routes
// });

// router.beforeEach(to => {
//   window.console.log(`router.to=>${to.path}`);
// })

export default router;

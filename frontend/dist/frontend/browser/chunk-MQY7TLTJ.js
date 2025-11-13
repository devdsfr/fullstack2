import "./chunk-WDMUDEB6.js";

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "login",
    loadComponent: () => import("./chunk-62HEXBVG.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-S5XUVO5C.js").then((m) => m.RegisterComponent)
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-MQY7TLTJ.js.map

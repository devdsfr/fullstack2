import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  Platform
} from "./chunk-3IJLS3AH.js";
import {
  CommonModule,
  DOCUMENT,
  Router
} from "./chunk-JUWHBX7C.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtext
} from "./chunk-QXWCZYAT.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the toolbar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to all toolbar row elements that have been projected. */
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatCommonModule, MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/features/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  constructor(router) {
    this.router = router;
  }
  logout() {
    console.log("Logout");
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 56, vars: 0, consts: [[1, "dashboard-container"], ["color", "primary"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], [1, "container"], [1, "cards-grid"], ["mat-card-avatar", ""], ["mat-raised-button", "", "color", "primary"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-toolbar", 1)(2, "span");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_5_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4)(9, "h1");
        \u0275\u0275text(10, "Bem-vindo ao Dashboard!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "mat-card")(13, "mat-card-header")(14, "mat-icon", 6);
        \u0275\u0275text(15, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-card-title");
        \u0275\u0275text(17, "Usu\xE1rios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "mat-card-content")(19, "h2");
        \u0275\u0275text(20, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, "Total de usu\xE1rios cadastrados");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "mat-card")(24, "mat-card-header")(25, "mat-icon", 6);
        \u0275\u0275text(26, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-card-title");
        \u0275\u0275text(28, "Estat\xEDsticas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-card-content")(30, "h2");
        \u0275\u0275text(31, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "Atividades recentes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "mat-card")(35, "mat-card-header")(36, "mat-icon", 6);
        \u0275\u0275text(37, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-card-title");
        \u0275\u0275text(39, "Notifica\xE7\xF5es");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "mat-card-content")(41, "h2");
        \u0275\u0275text(42, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Novas notifica\xE7\xF5es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "mat-card")(46, "mat-card-header")(47, "mat-icon", 6);
        \u0275\u0275text(48, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-card-title");
        \u0275\u0275text(50, "Configura\xE7\xF5es");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "mat-card-content")(52, "p");
        \u0275\u0275text(53, "Gerencie suas prefer\xEAncias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 7);
        \u0275\u0275text(55, "Acessar");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [
      CommonModule,
      MatToolbarModule,
      MatToolbar,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatCardModule,
      MatCard,
      MatCardAvatar,
      MatCardContent,
      MatCardHeader,
      MatCardTitle
    ], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f5f5f5;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #333;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\nmat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nmat-icon[mat-card-avatar][_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: #3f51b5;\n}\nmat-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin: 0 0 8px 0;\n  color: #3f51b5;\n}\nmat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\nmat-card-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule
    ], template: `
    <div class="dashboard-container">
      <mat-toolbar color="primary">
        <span>Dashboard</span>
        <span class="spacer"></span>
        <button mat-icon-button (click)="logout()">
          <mat-icon>logout</mat-icon>
        </button>
      </mat-toolbar>

      <div class="container">
        <h1>Bem-vindo ao Dashboard!</h1>
        
        <div class="cards-grid">
          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>people</mat-icon>
              <mat-card-title>Usu\xE1rios</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Total de usu\xE1rios cadastrados</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>analytics</mat-icon>
              <mat-card-title>Estat\xEDsticas</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Atividades recentes</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>notifications</mat-icon>
              <mat-card-title>Notifica\xE7\xF5es</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <h2>0</h2>
              <p>Novas notifica\xE7\xF5es</p>
            </mat-card-content>
          </mat-card>

          <mat-card>
            <mat-card-header>
              <mat-icon mat-card-avatar>settings</mat-icon>
              <mat-card-title>Configura\xE7\xF5es</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>Gerencie suas prefer\xEAncias</p>
              <button mat-raised-button color="primary">Acessar</button>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;d0490ab230ac467802a2aae534ea241226ee933de6815154735b40d98f19fc19;C:/Users/User/Documents/Projetos/fullstack2/frontend/src/app/features/dashboard/dashboard.component.ts */\n.dashboard-container {\n  min-height: 100vh;\n  background-color: #f5f5f5;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\nh1 {\n  margin-bottom: 30px;\n  color: #333;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\nmat-card {\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\nmat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\nmat-card-header {\n  margin-bottom: 16px;\n}\nmat-icon[mat-card-avatar] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: #3f51b5;\n}\nmat-card-content h2 {\n  font-size: 36px;\n  margin: 0 0 8px 0;\n  color: #3f51b5;\n}\nmat-card-content p {\n  margin: 0;\n  color: #666;\n}\nmat-card-content button {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 140 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-X5TXGBPK.js.map

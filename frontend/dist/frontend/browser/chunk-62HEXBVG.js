import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-46TIZIOW.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-3IJLS3AH.js";
import {
  CommonModule,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JUWHBX7C.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QXWCZYAT.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senha \xE9 obrigat\xF3ria");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senha deve ter no m\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.hidePassword = true;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login attempt:", this.loginForm.value);
      this.router.navigate(["/dashboard"]);
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 33, vars: 8, consts: [[1, "login-container"], [1, "login-card"], [3, "ngSubmit", "formGroup"], [1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "seu@email.com"], ["matPrefix", ""], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", 3, "disabled"], ["routerLink", "/auth/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
        \u0275\u0275text(4, "Login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-card-content")(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
        \u0275\u0275text(9, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275elementStart(11, "mat-icon", 5);
        \u0275\u0275text(12, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, LoginComponent_Conditional_13_Template, 2, 0, "mat-error")(14, LoginComponent_Conditional_14_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 3)(16, "mat-label");
        \u0275\u0275text(17, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 6);
        \u0275\u0275elementStart(19, "mat-icon", 5);
        \u0275\u0275text(20, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_21_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, LoginComponent_Conditional_24_Template, 2, 0, "mat-error")(25, LoginComponent_Conditional_25_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 8);
        \u0275\u0275text(27, " Entrar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "mat-card-actions")(29, "p");
        \u0275\u0275text(30, "N\xE3o tem uma conta? ");
        \u0275\u0275elementStart(31, "a", 9);
        \u0275\u0275text(32, "Registre-se");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(7);
        \u0275\u0275conditional((ctx.email == null ? null : ctx.email.hasError("required")) && (ctx.email == null ? null : ctx.email.touched) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.email == null ? null : ctx.email.hasError("email")) && (ctx.email == null ? null : ctx.email.touched) ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.password == null ? null : ctx.password.hasError("required")) && (ctx.password == null ? null : ctx.password.touched) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.password == null ? null : ctx.password.hasError("minlength")) && (ctx.password == null ? null : ctx.password.touched) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon
    ], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin: 20px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n}\nmat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule
    ], template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email" placeholder="seu@email.com">
              <mat-icon matPrefix>email</mat-icon>
              @if (email?.hasError('required') && email?.touched) {
                <mat-error>Email \xE9 obrigat\xF3rio</mat-error>
              }
              @if (email?.hasError('email') && email?.touched) {
                <mat-error>Email inv\xE1lido</mat-error>
              }
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Senha</mat-label>
              <input matInput [type]="hidePassword ? 'password' : 'text'" formControlName="password">
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword">
                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              @if (password?.hasError('required') && password?.touched) {
                <mat-error>Senha \xE9 obrigat\xF3ria</mat-error>
              }
              @if (password?.hasError('minlength') && password?.touched) {
                <mat-error>Senha deve ter no m\xEDnimo 6 caracteres</mat-error>
              }
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" class="full-width" [disabled]="loginForm.invalid">
              Entrar
            </button>
          </form>
        </mat-card-content>
        <mat-card-actions>
          <p>N\xE3o tem uma conta? <a routerLink="/auth/register">Registre-se</a></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:scss;1c75dfeb9e934efd9231e8d7547b8bfb733fb81acec9a63ebfb4c3ec425b62ea;C:/Users/User/Documents/Projetos/fullstack2/frontend/src/app/features/auth/login/login.component.ts */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.login-card {\n  width: 100%;\n  max-width: 400px;\n  margin: 20px;\n}\nmat-card-header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\nmat-card-title {\n  font-size: 24px;\n  font-weight: 500;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\nmat-card-actions {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\nmat-card-actions p {\n  margin: 0;\n}\nmat-card-actions a {\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n}\nmat-card-actions a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 123 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-62HEXBVG.js.map

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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Nome \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email \xE9 obrigat\xF3rio");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senha \xE9 obrigat\xF3ria");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Senha deve ter no m\xEDnimo 6 caracteres");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Confirma\xE7\xE3o de senha \xE9 obrigat\xF3ria");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "As senhas n\xE3o coincidem");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: _RegisterComponent.passwordMatchValidator });
  }
  static passwordMatchValidator(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Register attempt:", this.registerForm.value);
      this.router.navigate(["/auth/login"]);
    }
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 51, vars: 13, consts: [[1, "register-container"], [1, "register-card"], [3, "ngSubmit", "formGroup"], [1, "full-width"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "Seu nome"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "seu@email.com"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", 3, "type"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", 3, "disabled"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
        \u0275\u0275text(4, "Criar Conta");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-card-content")(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
        \u0275\u0275text(9, "Nome");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275elementStart(11, "mat-icon", 5);
        \u0275\u0275text(12, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, RegisterComponent_Conditional_13_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "mat-label");
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 6);
        \u0275\u0275elementStart(18, "mat-icon", 5);
        \u0275\u0275text(19, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, RegisterComponent_Conditional_20_Template, 2, 0, "mat-error")(21, RegisterComponent_Conditional_21_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 3)(23, "mat-label");
        \u0275\u0275text(24, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 7);
        \u0275\u0275elementStart(26, "mat-icon", 5);
        \u0275\u0275text(27, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 8);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_28_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(29, "mat-icon");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, RegisterComponent_Conditional_31_Template, 2, 0, "mat-error")(32, RegisterComponent_Conditional_32_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 3)(34, "mat-label");
        \u0275\u0275text(35, "Confirmar Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 9);
        \u0275\u0275elementStart(37, "mat-icon", 5);
        \u0275\u0275text(38, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 8);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_39_listener() {
          return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
        });
        \u0275\u0275elementStart(40, "mat-icon");
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, RegisterComponent_Conditional_42_Template, 2, 0, "mat-error")(43, RegisterComponent_Conditional_43_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 10);
        \u0275\u0275text(45, " Registrar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "mat-card-actions")(47, "p");
        \u0275\u0275text(48, "J\xE1 tem uma conta? ");
        \u0275\u0275elementStart(49, "a", 11);
        \u0275\u0275text(50, "Fa\xE7a login");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_10_0;
        let tmp_11_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.registerForm);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched) ? 13 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.touched) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.hasError("email")) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched) ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.hasError("minlength")) && ((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.touched) ? 32 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hideConfirmPassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hideConfirmPassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.touched) ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.registerForm.hasError("passwordMismatch") && ((tmp_11_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_11_0.touched) ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.registerForm.invalid);
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
    ], styles: ["\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin: 20px;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n}\nmat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule
    ], template: `
    <div class="register-container">
      <mat-card class="register-card">
        <mat-card-header>
          <mat-card-title>Criar Conta</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <mat-form-field class="full-width">
              <mat-label>Nome</mat-label>
              <input matInput type="text" formControlName="name" placeholder="Seu nome">
              <mat-icon matPrefix>person</mat-icon>
              @if (registerForm.get('name')?.hasError('required') && registerForm.get('name')?.touched) {
                <mat-error>Nome \xE9 obrigat\xF3rio</mat-error>
              }
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email" placeholder="seu@email.com">
              <mat-icon matPrefix>email</mat-icon>
              @if (registerForm.get('email')?.hasError('required') && registerForm.get('email')?.touched) {
                <mat-error>Email \xE9 obrigat\xF3rio</mat-error>
              }
              @if (registerForm.get('email')?.hasError('email') && registerForm.get('email')?.touched) {
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
              @if (registerForm.get('password')?.hasError('required') && registerForm.get('password')?.touched) {
                <mat-error>Senha \xE9 obrigat\xF3ria</mat-error>
              }
              @if (registerForm.get('password')?.hasError('minlength') && registerForm.get('password')?.touched) {
                <mat-error>Senha deve ter no m\xEDnimo 6 caracteres</mat-error>
              }
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Confirmar Senha</mat-label>
              <input matInput [type]="hideConfirmPassword ? 'password' : 'text'" formControlName="confirmPassword">
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button" (click)="hideConfirmPassword = !hideConfirmPassword">
                <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
              @if (registerForm.get('confirmPassword')?.hasError('required') && registerForm.get('confirmPassword')?.touched) {
                <mat-error>Confirma\xE7\xE3o de senha \xE9 obrigat\xF3ria</mat-error>
              }
              @if (registerForm.hasError('passwordMismatch') && registerForm.get('confirmPassword')?.touched) {
                <mat-error>As senhas n\xE3o coincidem</mat-error>
              }
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" class="full-width" [disabled]="registerForm.invalid">
              Registrar
            </button>
          </form>
        </mat-card-content>
        <mat-card-actions>
          <p>J\xE1 tem uma conta? <a routerLink="/auth/login">Fa\xE7a login</a></p>
        </mat-card-actions>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:scss;c1974c5452e7634fb2ed4052aa934bb21d17e36869299f9c9c4fd6b63629d1aa;C:/Users/User/Documents/Projetos/fullstack2/frontend/src/app/features/auth/register/register.component.ts */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.register-card {\n  width: 100%;\n  max-width: 400px;\n  margin: 20px;\n}\nmat-card-header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\nmat-card-title {\n  font-size: 24px;\n  font-weight: 500;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\nmat-card-actions {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\nmat-card-actions p {\n  margin: 0;\n}\nmat-card-actions a {\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n}\nmat-card-actions a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 147 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-S5XUVO5C.js.map

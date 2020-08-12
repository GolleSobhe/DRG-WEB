import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { PresidentComponent } from './president/president.component';
import { extract } from './i18n';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'who-whe-are', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'president', component: PresidentComponent, data: { title: extract('President') } },
    { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
    { path: 'register', component: RegisterComponent, data: { title: extract('Register') } },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

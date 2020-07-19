import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { PresidentComponent } from './president/president.component';
import { extract } from './i18n';
import { TeamComponent } from './shell/team/team.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'president', component: PresidentComponent, data: { title: extract('President') } },
    { path: 'team', component: TeamComponent, data: { title: extract('Team') } },
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

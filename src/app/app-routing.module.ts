import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tela',
    pathMatch: 'full'
  },
  {
    path: 'tela',
    loadChildren: () => import('./pages/tela/tela.module').then( m => m.TelaPageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./pages/segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'terceira',
    loadChildren: () => import('./pages/terceira/terceira.module').then( m => m.TerceiraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

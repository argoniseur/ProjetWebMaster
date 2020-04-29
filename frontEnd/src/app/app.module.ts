import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './service/film.service';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { RandomComponent } from './random/random.component';

const appRoutes: Routes = [
  { path: 'random', component: RandomComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'add', component:  AddComponent},
  { path: '', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FilmComponent,
    AddComponent,
    DeleteComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddMovieComponent,
    ListMoviesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

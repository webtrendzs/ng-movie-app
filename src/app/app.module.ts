import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FeaturedComponent } from './featured/featured.component';
import { NavigationComponent } from './navigation/navigation.component';

import { EllipsisPipe } from './shared/ellipsis.pipe';
import { MovieResourceService } from './omdb-api/movie-resource.service';
import { MovieSearchService } from './shared/movie-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FeaturedComponent,
    NavigationComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [MovieResourceService, MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

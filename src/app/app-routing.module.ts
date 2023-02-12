import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorComponent } from './author/author.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ZipyComponent } from './zipy/zipy.component';

const routes: Routes = [
  {path:'favorite',component:FavoriteComponent},
  {path:'contact',component:ContactFormComponent},
  {path:'zipy',component:ZipyComponent},
  {path:'author/:author.name',component:AuthorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

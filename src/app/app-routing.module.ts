import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '' , redirectTo: 'list' , pathMatch: 'full'},
  {path: 'list' , component: BooklistComponent},
  {path: 'add' , component: AddbookComponent},
  {path: 'update' , component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

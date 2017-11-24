import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   { path: 'category', component: CategoryComponent },
   { path: 'item/:cid',      component: ItemComponent,
    data: { id : ':cid' } 
  },
  {
    path: 'home',
    component: HomeComponentComponent
  }
  ,{ path: '**', component: HomeComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CategoryComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

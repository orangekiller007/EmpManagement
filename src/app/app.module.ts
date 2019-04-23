import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FetchdataService } from './fetchdata.service';
import { AddComponent } from './add/add.component';
import { AddempService } from './addemp.service';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[{
  path:'home',
  component:HomeComponent
},
{
  path:'view',
  component:ViewComponent
},
{
  path:'home/add',
  component:AddComponent
}
,
{
  path: 'view/edit/:id',
  component: EditComponent
},
{
  path:'',
  component:LoginComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchdataService,AddempService],
  bootstrap: [AppComponent]
})
export class AppModule { }

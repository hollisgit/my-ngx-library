import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  LibModule  } from 'my-ngx-library';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        LibModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }

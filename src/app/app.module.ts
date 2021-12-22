import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NbaServiceService } from "../app/service/nba-service.service";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSortModule,
  ],
  providers: [NbaServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

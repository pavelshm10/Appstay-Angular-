import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import {MatMenuModule} from '@angular/material/menu';
import { MenuItemComponent } from './menu-item/menu-item.component';

const materialModules = [
  MatIconModule,
  MatButtonToggleModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatMenuModule
];
@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule, 
    ...materialModules
  ],
  exports: [...materialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

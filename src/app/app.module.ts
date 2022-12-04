import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SourceListComponent } from './source-list/source-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: SourceListComponent }]),
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, TopBarComponent, SourceListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

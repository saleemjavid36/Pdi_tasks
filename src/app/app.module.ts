import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablerowSelectComponent } from './tablerow-select/tablerow-select.component';
import { TablegridDirectivesDirective } from './directives/tablegrid-directives.directive';
import { ContextMenuComponent } from './tablerow-select/context-menu/context-menu.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { SchedularsComponent } from './schedulars/schedulars.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TablerowSelectComponent,
    TablegridDirectivesDirective,
    ContextMenuComponent,
    ListBoxComponent,
    SchedularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

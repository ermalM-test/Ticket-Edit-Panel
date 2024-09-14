import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BannerComponent } from './banner/banner.component';
import { FieldsComponent } from './fields/fields.component';
import { SubtasksComponent } from './subtasks/subtasks.component';
import { ListItemComponent } from './subtasks/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    SvgIconComponent,
    BannerComponent,
    FieldsComponent,
    SubtasksComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

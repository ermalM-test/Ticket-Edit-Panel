import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {
    component: EditTaskComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

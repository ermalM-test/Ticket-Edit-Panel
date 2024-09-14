import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent {
  // Please ensure that the 'icon' key is used,
  // and that the corresponding SVG file is also included in svg-icon.component.html.
  navigationButtons = [
    {
      icon: 'icon-details',
      text: 'Details',
    },
    {
      icon: 'icon-activity',
      text: 'Activity',
    },
    {
      icon: 'icon-comments',
      text: 'Comments',
    },
    {
      icon: 'icon-attachments',
      text: 'Attachments',
    },
  ];
  // first button to be active on first load
  activeButton = this.navigationButtons[0];

  // update active navigation button
  navigationButtonClick(button: any) {
    this.activeButton = button;
  }
}

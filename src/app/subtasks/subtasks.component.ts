import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subtasks',
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.scss'],
})
export class SubtasksComponent implements OnInit {
  subtasks: any = [
    { checked: true, text: 'Send invoice to collections agency' },
    { checked: false, text: 'Write an email to them to follow-up' },
    { checked: false, text: 'Send paper mail to account' },
    {
      checked: false,
      text: 'This is my new subtask… I’m autofocused here when I add a subtask',
    },
  ];
  subtasksCheckedIndex: number = 0;
  subtasksBarWidth: number = 0;

  ngOnInit(): void {
    this.calculateBarWidth();
  }

  calculateBarWidth() {
    // when subtask status gets updated update subtasksCheckedIndex
    // in order to update progress bar
    this.subtasksCheckedIndex = this.subtasks.filter((task: any) => {
      return task.checked;
    }).length;

    this.subtasksBarWidth =
      (this.subtasksCheckedIndex / this.subtasks.length) * 100;
  }

  addSubtask() {
    // add subtask with 'added' key to show input element
    this.subtasks.push({
      added: true,
      checked: false,
      text: '',
    });
    this.calculateBarWidth();
  }

  removeTask() {
    // remove the last subtask and update progressbar
    this.subtasks = this.subtasks.filter((subtask: any) => {
      return subtask.text != '';
    });
    this.calculateBarWidth();
  }
}

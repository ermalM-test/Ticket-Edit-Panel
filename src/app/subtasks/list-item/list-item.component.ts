import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'subtask-list-item',
  template: `
    <div class="subtask" [ngClass]="{ checked: subtask.checked }">
      <div class="subtask-check-container">
        <svg-icon
          iconName="icon-checkmark"
          [color]="'#3E40DB'"
          width="10px"
          height="10px"
        ></svg-icon>
        <label>
          <input
            type="checkbox"
            [(ngModel)]="subtask.checked"
            [disabled]="subtask.added"
            (change)="updateStatus(subtask)"
          />
        </label>
      </div>
      <div class="subtask-text-container">
        <span *ngIf="!subtask.added" (click)="editSubtask()">{{
          subtask.text
        }}</span>
        <input
          *ngIf="subtask.added"
          type="text"
          [(ngModel)]="subtask.text"
          (blur)="updateTaskContent(subtask)"
          (keyup.enter)="updateTaskContent(subtask)"
          #subtaskInput
        />
      </div>
    </div>
  `,
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() subtask: any;
  @Output() updateTaskStatus: any = new EventEmitter();
  @Output() removeTask: any = new EventEmitter();

  @ViewChild('subtaskInput') subtaskInput: ElementRef;

  ngOnInit(): void {
    if (this.subtask?.added) {
      this.focusInputElement();
    }
  }

  focusInputElement() {
    setTimeout(() => {
      this.subtaskInput.nativeElement.focus();
    });
  }

  editSubtask() {
    this.subtask['added'] = true;
    this.focusInputElement();
  }
  updateStatus(task: any) {
    // when clicks outside input without writting anything remove the last task
    if (task.text == '') this.removeTask.emit();

    this.updateTaskStatus.emit(task);
  }
  updateTaskContent(task: any) {
    // when clicks outside input without writting anything remove the last task
    if (task.text == '') this.removeTask.emit();

    delete task.added;
  }
}

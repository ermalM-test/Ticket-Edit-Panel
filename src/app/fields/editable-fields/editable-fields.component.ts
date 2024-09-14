import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-fields',
  templateUrl: './editable-fields.component.html',
  styleUrls: ['./editable-fields.component.scss'],
})
export class EditableFieldsComponent {
  @Input() formControl: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() iconName: string;
  @Input() isEditing: boolean;
  @Output() editingStarted = new EventEmitter<void>();
  @Output() editingEnded = new EventEmitter<void>();

  startEditing() {
    this.isEditing = true;
    this.editingStarted.emit();
  }

  endEditing() {
    this.isEditing = false;
    this.editingEnded.emit();
  }
}

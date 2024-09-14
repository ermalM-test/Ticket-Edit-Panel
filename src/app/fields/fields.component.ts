import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  isEditing: any = {
    assignee: false,
    coOwner: false,
    importance: false,
    costumerName: false,
    invoiceId: false,
  };
  @ViewChild('assigneeInput') assigneeInput: ElementRef;
  @ViewChild('coOwnerInput') coOwnerInput: ElementRef;
  @ViewChild('importanceInput') importanceInput: ElementRef;
  @ViewChild('costumerNameInput') costumerNameInput: ElementRef;
  @ViewChild('invoiceIdInput') invoiceIdInput: ElementRef;

  ngOnInit(): void {
    this.form = this.fb.group({
      status: [{ value: 'Unpaid', disabled: true }],
      assignee: ['Brian Griffin', Validators.required],
      coOwner: ['Peter Griffin', Validators.required],
      importance: ['Very urgent', Validators.required],
      costumerName: ['', Validators.required],
      invoiceId: ['19823190', Validators.required],
    });
  }

  editField(field: string) {
    this.isEditing[field] = true;

    setTimeout(() => {
      if (field === 'assignee') {
        this.assigneeInput.nativeElement.focus();
      } else if (field === 'coOwner') {
        this.coOwnerInput.nativeElement.focus();
      } else if (field === 'importance') {
        this.importanceInput.nativeElement.focus();
      } else if (field === 'costumerName') {
        this.costumerNameInput.nativeElement.focus();
      } else if (field === 'invoiceId') {
        this.invoiceIdInput.nativeElement.focus();
      }
    });
  }

  saveField(field: string) {
    this.isEditing[field] = false;
  }
}

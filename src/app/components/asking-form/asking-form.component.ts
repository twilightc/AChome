import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asking-form',
  templateUrl: './asking-form.component.html',
  styleUrls: ['./asking-form.component.scss']
})
export class AskingFormComponent implements OnInit {
  question = '';
  isAsking = false;
  @Output() SendAskingForm = new EventEmitter<string>();

  constructor(
    private merchandiseservice: MerchandiseService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  deliverForm() {
    this.SendAskingForm.emit(this.question);
    this.question = '';
  }
}

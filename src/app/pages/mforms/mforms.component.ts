import { Component } from '@angular/core';

import { ExamComponent } from 'src/app/components/forms/exam/exam.component';

@Component({
  selector: 'app-mforms',
  standalone: true,
  imports: [
    ExamComponent
  ],
  templateUrl: './mforms.component.html',
  styleUrl: './mforms.component.scss'
})
export class MformsComponent {
  constructor() {}
}

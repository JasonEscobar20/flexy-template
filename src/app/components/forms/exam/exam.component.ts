import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';



@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamComponent {

}

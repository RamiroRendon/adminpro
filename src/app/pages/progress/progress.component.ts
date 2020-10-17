import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
progreso: number = 90;

get getPorcentaje(){
  return `${this.progreso}%`;
}
}

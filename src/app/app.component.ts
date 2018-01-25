import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 buttonanimate">
            <div class="col-md-6">
              <a (click)="animateSquare('normal')" class="btn btn-danger">Animate1</a>
            </div>
            <div class="col-md-6">
              <a (click)="animateSquare('animated')" class="btn btn-warning">Animate2</a>
            </div>
        </div>
        </div>
        <div class="col-md-3">
        </div>
      </div>
      <div class="col-md-6">
        <app-animate [currentState]="nextState"></app-animate>
      </div>
    </div>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 Animations Tutorial';
  nextState = 'normal';
  animateSquare(state) {
    this.nextState = state;
  }
}

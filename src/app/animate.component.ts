import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animate',
  template: `<div [@changeState]="currentState" class="myblock mx-auto"></div>`,
  styles: [`
  .myblock {
    background-color: green;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    margin: 5rem;
  }
  `],
  animations: [
    trigger('changeState', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('animated', style({
        backgroundColor: 'blue',
        transform: 'scale(1.5)'
      })),
      transition('*=>normal', animate('800ms')),
      transition('*=>animated', animate('200ms'))
    ])
  ]
})

export class AnimateComponent {
  @Input() currentState;
}

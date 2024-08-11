import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  @Output() readMoreEvent = new EventEmitter<{id: number, name: string, price: number,  description: string}>();

  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() description: string = "";
  
  readMore() {
    this.readMoreEvent.emit(this);
  }
}

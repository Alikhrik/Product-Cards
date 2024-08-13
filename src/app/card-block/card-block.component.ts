import { Component, Input, Output, EventEmitter,
  ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent implements AfterContentInit {
  @Output() readMoreEvent = new EventEmitter<{id: number, name: string, price: number,  description: string}>();
  @ContentChild('productColor') productColor!: ElementRef;

  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() description: string = "";

  @Input() discount: number = 0;
  
  readMore() {
    this.readMoreEvent.emit(this);
  }

  applyDiscount() {
    this.discount = 15;
  }

  ngAfterContentInit(): void {
    let element = this.productColor.nativeElement;
    element.style.backgroundColor = element.innerText;
    element.style.color = 'white';
  }
}

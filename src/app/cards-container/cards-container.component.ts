import { Component, ViewChildren, QueryList  } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {

  @ViewChildren(CardBlockComponent) CardBlockComponents!: QueryList<CardBlockComponent>;

  applyDiscountAll() {
    this.CardBlockComponents.forEach((child) => child.applyDiscount());
  }

  products = [
    {id:1, name:'product1', price:110, description: 'product1 text description', color: 'red'},
    {id:2, name:'product2', price:120, description: 'product2 text description', color: 'blue'},
    {id:3, name:'product3', price:130, description: 'product3 text description', color: 'green'}
  ]

  CurrentId?: number;
  CurrentName?: string;
  CurrentPrice?: number;
  CurrentDescription?: string;

  isNoContent() : boolean {
    return this.CurrentName === undefined &&
    this.CurrentPrice === undefined &&
    this.CurrentDescription === undefined;
  }

  showMore(data: {id: number, name: string, price: number, description: string}) {
    this.CurrentId = data.id;
    this.CurrentName = data.name;
    this.CurrentPrice = data.price;
    this.CurrentDescription = data.description;
  }
}

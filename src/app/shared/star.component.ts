import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  pageTitle: string;
  @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
      this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit('rating ${this.rating} was clicked');
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }
}

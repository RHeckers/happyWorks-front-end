import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-slider',
  templateUrl: './score-slider.component.html',
  styleUrls: ['./score-slider.component.scss']
})
export class ScoreSliderComponent implements OnInit {

  @Input() startAt;

  @Output() selectedAnsware = new EventEmitter<any>();

  currentValue: number;

  constructor() { }

  ngOnInit() {
    console.log(this.startAt);
    this.startAt ? this.currentValue = this.startAt : this.currentValue = 50;
  }

  getCurrentRange(e) {
    const currentValue = e.target.valueAsNumber;
    this.selectedAnsware.emit({enumIndex: currentValue});
  }

}

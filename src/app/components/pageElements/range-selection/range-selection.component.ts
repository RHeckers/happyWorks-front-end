import { GlobalService } from '../../../services/global.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as EnumsValues from '../../../enums/enums';

@Component({
  selector: 'app-range-selection',
  templateUrl: './range-selection.component.html',
  styleUrls: ['./range-selection.component.scss']
})
export class RangeSelectionComponent implements OnInit {

  @Input() set ranges(values : string) {
    if (values) {
      this.rangesAsArray = this.globalService.mapEnumValuesToArray(values);
    }
  };
  @Input() set existingValue(value : string) {
    this.selected = value;
  };

  @Output() selectedAnsware = new EventEmitter<any>();
  
  rangesAsArray;
  selected;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    if (!this.rangesAsArray) {
      const rangesAsEnum = EnumsValues.range100in4;
      this.rangesAsArray = this.globalService.mapEnumValuesToArray(rangesAsEnum);
    }
  }

  makeSelection(selected) {
    this.selected = selected.enumIndex;
    this.selectedAnsware.emit(selected);
  }

}

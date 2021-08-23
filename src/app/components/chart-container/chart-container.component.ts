import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit {

  @Input() title: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}

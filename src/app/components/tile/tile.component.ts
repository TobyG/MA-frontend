import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() title = "";
  @Input() subtitle = "";

  constructor() { }

  ngOnInit(): void {
  }

}

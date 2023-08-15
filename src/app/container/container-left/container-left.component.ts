import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.scss'],
})
export class ContainerLeftComponent implements OnInit {
  @Input()
  childPosition!: string;

  ngOnInit(): void {}
  constructor() {}
}

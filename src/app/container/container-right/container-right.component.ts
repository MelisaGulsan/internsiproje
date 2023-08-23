import { Component, OnInit , Input, HostBinding} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-container-right',
  templateUrl: './container-right.component.html',
  styleUrls: ['./container-right.component.scss'],
  // animations:[
  //   trigger:('fade', [
  //   state('void', style({pocaity:0})),
  //   transition(':enter,leave',[animate(300)])
  // ])]
})
export class ContainerRightComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input()
  childPosition!: string;
 }

import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-container-right',
  templateUrl: './container-right.component.html',
  styleUrls: ['./container-right.component.scss']
})
export class ContainerRightComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input()
  childPosition!: string;
 }

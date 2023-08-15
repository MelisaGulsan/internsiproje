import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-container-middle',
  templateUrl: './container-middle.component.html',
  styleUrls: ['./container-middle.component.scss']
})
export class ContainerMiddleComponent implements OnInit{
 
  @Input()
  childPosition!: string;
  
  ngOnInit(): void {
  }

}

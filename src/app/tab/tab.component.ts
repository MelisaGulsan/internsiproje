import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
 
  lastNumber!: number;
  
  obj = [
    {
      name:'Tab 1',
      position:'left',
      type:'tab1',
      active:true
    },
    {
      name:'Tab 2',
      position:'Middle',
      type:'tab2',
      active:false
    },
    {
      name:'Tab 3',
      position:'Right',
      type:'tab3',
      active:false
    }
  ]


  @Output() messageEvent =new EventEmitter<object>();


  constructor() {}
  
  
  tabClk(val:string,val2:string, online:boolean, i:number){
    const params = {
      "key": val,
      "position":val2,
      "active":online,
      "param":i
    }
    this.obj[i].active = true

    for (let index = 0; index < this.obj.length; index++) {
      
      if(i == index){
        this.obj[index].active = true
      } else {
        this.obj[index].active = false
      }
    }
       
    this.messageEvent.emit(params)
  }

  
}

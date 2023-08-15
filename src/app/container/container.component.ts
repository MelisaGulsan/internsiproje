import {
  Component,
  SimpleChange,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  tab1 = true;
  tab2: any;
  tab3: any;

  @Output() propName: EventEmitter<string> = new EventEmitter();

  parentLeft = 'Message: Left';
  parentMid = 'Message: Mid';
  parentRight = 'Message: Right';

  ngOnInit(): void {}
  childMessage(val: any) {
    if (val.key == 'tab1') {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
    } else if (val.key == 'tab2') {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
    } else {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
    }
  }
}

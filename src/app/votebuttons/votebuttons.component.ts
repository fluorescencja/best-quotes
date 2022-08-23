import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-votebuttons',
  templateUrl: './votebuttons.component.html',
  styleUrls: ['./votebuttons.component.css']
})
export class VotebuttonsComponent {

@Output() voteValue = new EventEmitter<number>();

}

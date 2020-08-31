import { Component, OnInit } from '@angular/core';
import { CommService} from '../../../services/communications.service';
@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.scss']
})
export class LhsComponent implements OnInit {

  constructor(private service: CommService) { }

  ngOnInit(): void {
  }
setData(val: string): void {
this.service.setData(val);

}
}

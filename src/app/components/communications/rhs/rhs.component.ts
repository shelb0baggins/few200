import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/communications.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit {
  data$: Observable<string>;
  sub: Subscription;
  constructor(private service: CommService) { }

  ngOnInit(): void {
    this.data$ = this.service.getData();
    this.sub = this.service.getData().subscribe(a => console.log(a));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }
}

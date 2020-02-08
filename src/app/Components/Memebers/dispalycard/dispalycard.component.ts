import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_Models/user';

@Component({
  selector: 'app-dispalycard',
  templateUrl: './dispalycard.component.html',
  styleUrls: ['./dispalycard.component.scss']
})

export class DispalycardComponent implements OnInit {
@Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}

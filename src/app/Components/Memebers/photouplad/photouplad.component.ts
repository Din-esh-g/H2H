import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_Models/photo';

@Component({
  selector: 'app-photouplad',
  templateUrl: './photouplad.component.html',
  styleUrls: ['./photouplad.component.scss']
})
export class PhotoupladComponent implements OnInit {
@Input() photos:Photo[];
  constructor() { }

  ngOnInit() {
  }

}

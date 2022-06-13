import { Component, OnInit } from '@angular/core';
import {Sponsor} from "../Models/Sponsor";
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors?: Sponsor[];
  constructor() {
    this.sponsors = [
      {
      image:"https://www.enactusstclair.ca/wp-content/uploads/2018/04/St.-Clair_s.png"
    },   {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2018/04/SRC_s.png"
      },   {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2018/04/Scotia_s.png"
      },   {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2018/04/Alumni_s.png"
      },   {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2019/08/genesis-2-300x123.png"
      }
    ]
  }

  ngOnInit(): void {
  }

}

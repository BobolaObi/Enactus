import { Component, OnInit } from '@angular/core';
import {Team} from "../Models/Team";
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  projectManagers?: Team[];
  executiveTeam?: Team[];

  constructor() {

    this.executiveTeam = [
      {
        name:"Trevor Ramieri",
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/trevor-240x300.jpg",
        title:"President"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/alex-240x300.jpg",
        name:"Alexandra Hanna",
        title:"Vice President of Human Resources"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2019/12/av-2-300x300.png",
        name:"Avery King",
        title:"Vice President of Project Development"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/jayden-240x300.jpg",
        name:"Jayden Mctavish",
        title:"Vice President of Finance"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/D8C238C5-7800-48B7-8892-8A43FF849AFA-239x300.png",
        name:"Omar Yousef",
        title:"Vice President of Technology"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/emma-240x300.jpg",
        name:"Emma Papa",
        title:"Vice President of Marketing"
      },

],
      this.projectManagers = [
        {
          image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/bethany-240x300.jpg",
          name:"Bethany D’Alimonte",
          title:"interACT"
        },
        {
          image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/francessco-240x300.jpg",
          name:"Francesco DiLeonardo",
          title:"Endure"
        },    {
          image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/sierra-240x300.jpg",
          name:"Sierra Piekosz",
          title:"palma"
        },    {
          image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/blake-240x300.jpg",
          name:"Blake Paterson",
          title:"E.A.S.T."
        },    {
          image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/brianna-240x300.jpg",
          name:"Brianna Gaylord",
          title:"transPLANT"
         },
        //{
        //   image:"",
        //   name:"",
        //   title:""
        // },
      ]
  }

  ngOnInit(): void {
  }

}

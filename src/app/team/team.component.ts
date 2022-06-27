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
        image:"assets/Executive-team-Images/trevor-240x300.jpg",
        title:"President"
      },
      {
        image:"assets/Executive-team-Images/alex-240x300.jpg",
        name:"Alexandra Hanna",
        title:"Vice President of Human Resources"
      },
      {
        image:"assets/Executive-team-Images/av-2-300x300.png",
        name:"Avery King",
        title:"Vice President of Project Development"
      },
      {
        image:"assets/Executive-team-Images/jayden-240x300.jpg",
        name:"Jayden Mctavish",
        title:"Vice President of Finance"
      },
      {
        image:"assets/Executive-team-Images/omar.png",
        name:"Omar Yousef",
        title:"Vice President of Technology"
      },
      {
        image:"assets/Executive-team-Images/emma-240x300.jpg",
        name:"Emma Papa",
        title:"Vice President of Marketing"
      },

],
      this.projectManagers = [
        {
          image:"assets/Project-Manager-Images/bethany-240x300.jpg",
          name:"Bethany D’Alimonte",
          title:"interACT"
        },
        {
          image:"assets/Project-Manager-Images/francessco-240x300.jpg",
          name:"Francesco DiLeonardo",
          title:"Endure"
        },    {
          image:"assets/Project-Manager-Images/sierra-240x300.jpg",
          name:"Sierra Piekosz",
          title:"palma"
        },    {
          image:"assets/Project-Manager-Images/blake-240x300.jpg",
          name:"Blake Paterson",
          title:"E.A.S.T."
        },    {
          image:"assets/Project-Manager-Images/brianna-240x300.jpg",
          name:"Brianna Gaylord",
          title:"transPLANT"
         },
      ]
  }

  ngOnInit(): void {
  }

}

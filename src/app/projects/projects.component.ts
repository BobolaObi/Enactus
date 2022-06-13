import { Component, OnInit } from '@angular/core';
import {Projects} from "../Models/Projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects?: Projects[]
  constructor() {
    this.projects = [
      {
        image: "https://www.enactusstclair.ca/interAct/images/interACT-sm.png",
        name: "interACT",
        manager: "Project Manager: Bethany D’Alimonte – interactwindsor@gmail.com",
        description: "interACT is a financial literacy project that aims to support the livelihood of international students as they pursue their studies and look to establish themselves in Canada’s work culture. Our team directly supports these students through the development of our live mobile application and website, as well as through mock interviews, seminars, and resume clinics.",
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/reVERT-300x180.png",
        name:"reVERT",
        manager:"Project Manager – Trevor Ramieri – trevor.ramieri01@stclairconnect.ca",
        description:"reVERT is a green tech sustainability project that looks to divert unnecessary waste from landfills from institutions. We do this by working with waste management teams to better assess their consumers’ waste habits and generate real-time solutions. This is done through direct education and our developed solutions, such as the development of our waste sensor system"
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/E.A.S.T._-_Dark-300x300.png",
        name:"E.A.S.T",
        manager:"Project Manager: Blake Paterson – BP26@myscc.ca",
        description:"E.A.S.T., or Entrepreneurial Action in Skilled Trades, is an educational initiative that aims to \n" +
          "    empower aspiring students to become entrepreneurs and explore opportunities within skilled trades.\n" +
          "    We support participants in multiple stages of their development, such as through our six-week workbook and \n" +
          "    vending opportunities. Our project supports the efforts of these businesses while fostering a true community."
      }, {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/Endure-Dark-300x300.png",
        name:"Endure",
        manager:"Project Manager: Francesco DiLeonardo – fd@myscc.ca",
        description:"Endure is a peer mentorship project that instills confidence and empowerment in\n" +
          "    participants in areas such as employment skills and financial literacy.\n" +
          "    We do this in partnership with our campus Community Integration\n" +
          "    through Continuing Education (CICE) program. Through our designed activities and peer-to-peer mentorship,\n" +
          "    our project instills workplace confidence and personal development and promotes an inclusive campus community."
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/transPLANT-300x100.png",
        name:"transPLANT",
        manager:"Project Manager: Brianna Gaylord – BG39@myscc.ca",
        description:"transPLANT is a budding social enterprise that looks to improve residential and institutional \n" +
          "    landscapes directly by combining permaculture practices, such as native plants and water management,\n" +
          "    with modern landscape design. These strategies not only improve the visible impact of properties but also present\n" +
          "    more effective cost savings in areas such as plant replacement and utilities."
      },
      {
        image:"https://www.enactusstclair.ca/wp-content/uploads/2022/01/palma-300x300.png",
        name:"Palma",
        manager:"Project Manager: Sierra Piekosz – SP215@myscc.ca",
        description:"palma is a mental health project that aims to improve the ability to assess, explore, and communicate\n" +
          "    around one’s mental health, improving the accessibility of resources and support services. Our developing\n" +
          "    mobile application offers users the ability to check in with their wellness while facilitating a more engaged\n" +
          "    dialogue around their activity and support."
      }
    ]
  }

  ngOnInit(): void {
  }

}

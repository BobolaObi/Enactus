export class Projects{
  image: string
  name: string
  manager: string
  description: string
  links: String

  constructor(image: string, name: string, manager: string, description: string, links: string) {
    this.image = image;
    this.name = name;
    this.manager = manager;
    this.description = description;
    this.links = links;
  }
}

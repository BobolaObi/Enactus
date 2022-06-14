export class Projects{
  image: string
  name: string
  manager: string
  description: string

  constructor(image: string, name: string, manager: string, description: string) {
    this.image = image;
    this.name = name;
    this.manager = manager;
    this.description = description;
  }
}

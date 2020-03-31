import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  
  researchBeingEdited: object = null;
    
    experiments: object[] = [
      {name: "Mars soil sample"},
      {name: "Plant growth in habitat"},
      {name: "Human bone density"},
    ];

    constructor() { }
    
    ngOnInit() {
  }
  
  add(researchName: string) {
    this.experiments.push({name: researchName});
  }
  
  remove(research: object) {
    let index = this.experiments.indexOf(research);
    this.experiments.splice(index, 1);
  }
  
  edit(research: object) {
    this.researchBeingEdited = research;
  }
  
  save(name: string, research: object) {
   research['name'] = name;
   this.researchBeingEdited = null;
  }

}


  
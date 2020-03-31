import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;
  
  equipment: object[] = [
    {name: "Habitat Dome"},
    {name: "Drones"},
    {name: "Food Containers"},
    {name: "Oxygen Tanks"}
  ];

  constructor() { }

  ngOnInit() {
  }
  
  add(itemName: string) {
    this.equipment.push({name: itemName});
  }
  
  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  
  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(name: string, item: object) {
   item['name'] = name;
   this.itemBeingEdited = null;
  }

}






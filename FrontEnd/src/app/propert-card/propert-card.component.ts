import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-card',
  templateUrl: './propert-card.component.html',
  styleUrls: ['./propert-card.component.css']
})
export class PropertCardComponent {

    property:any = {
       "id":1,
        "type":"Large House",
        "price":12000

    }

}

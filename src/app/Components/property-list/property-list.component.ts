import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/Services/property.service';
import { PropertyList } from 'src/app/Models/property-list.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html'
})
export class PropertyListComponent implements OnInit {
    constructor(private propertyService: PropertyService) { }
    
    propertyList: PropertyList;
    ngOnInit() {
        this.propertyService.getProperties().subscribe(res=> {
          this.propertyList = res
          console.log(this.propertyList.properties)
        });
    }
}

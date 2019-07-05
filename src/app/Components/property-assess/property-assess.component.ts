import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/Services/property.service';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/Models/property.model';
import { Tenant } from 'src/app/Models/tenant.model';

@Component({
  selector: 'app-property-assess',
  templateUrl: './property-assess.component.html'
})
export class PropertyAssessComponent implements OnInit {

  constructor(private proprtyService: PropertyService, private router: ActivatedRoute) { }
  property: Property;
  tenant: Tenant = new Tenant();

  ngOnInit() {
    let propertyId = +this.router.snapshot.paramMap.get("propertyId");
    this.proprtyService.getPropertyDetail(propertyId).subscribe(res=> {
      this.property = res;
    });
  }

  processOccupancy(){
    this.property.occupancy = (this.tenant.TenantArea / this.property.propertyArea) * 100;
  }

}

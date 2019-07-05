import { Injectable } from '@angular/core';
import { PropertyList } from '../Models/property-list.model';
import { Observable, of } from 'rxjs';
import { Property } from '../Models/property.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PropertyService{

    server: string = "http://property-api.azurewebsites.net/api/";
    propertyListApi: string = "properties";
    propertyDetailApi: string = "properties/"

    constructor(private httpService: HttpClient ){    }

    getPropertyDetail(propertyId: number) : Observable<Property> {
        /*let myPropertyList = new PropertyList();
        myPropertyList.Properties = [
            { PropertyId: 10, PropertyName: "West", PropertyAddress: "Colombo", PropertyArea: 50000, Occupancy: 0 },
            { PropertyId: 11, PropertyName: "Center", PropertyAddress: "Kandy", PropertyArea: 22000, Occupancy: 0 },
            { PropertyId: 12, PropertyName: "North", PropertyAddress: "Jaffna", PropertyArea: 45000, Occupancy: 0 },
            { PropertyId: 15, PropertyName: "South", PropertyAddress: "Galle", PropertyArea: 60000, Occupancy: 0 }
        ];
        let selectedProprty = myPropertyList.Properties.filter(p=>p.PropertyId == propertyId)[0];*/

        let selectedProprty = this.httpService.get<Property>(this.server + this.propertyDetailApi + propertyId);
        return selectedProprty;
    }

    getProperties(): Observable<PropertyList> {
        
        let selectedProprty = this.httpService.get<PropertyList>(this.server + this.propertyListApi);
        return selectedProprty;
    }
}
import { Property } from './property.model';

export class PropertyList {
    public properties : Property[];
    public pageNumber: number;
    public currentPage: number;
    public pageSize: number;
}
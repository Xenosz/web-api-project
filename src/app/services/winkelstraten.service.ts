import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

@Injectable()
export class WinkelStratenService {
    constructor(private _http: HttpClient) { }

    getWinkelstraat(): Observable<IwinkelstratenResult>{
        return this._http.get<IwinkelstratenResult>("http://datasets.antwerpen.be/v4/gis/winkelstraatstraat.json")
        .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse( data.geometry)); return root})
        //.do(data => { console.log(JSON.stringify(data)) }); //Test om te zien of de data wordt opgehaald
    }

    winkelstraatInfo : IwinkelstratenResult;

    getWinkelstraatWithCache(): Observable<IwinkelstratenResult>{
        if(this.winkelstraatInfo)
            return Observable.of(this.winkelstraatInfo);
        else
            return this._http.get<IwinkelstratenResult>("http://datasets.antwerpen.be/v4/gis/winkelstraatstraat.json")
            .map(root => {root.data.forEach(data => data.geometry2 = JSON.parse( data.geometry)); return root})
                .do(data => {
                    this.winkelstraatInfo = data; 
                    console.log(JSON.stringify(data));
                });
    }

}
export interface IwinkelstratenResult {
    paging: Paging;
    data: Iwinkelstraat[];
  }
  
  
export interface IGeometry {
    type: string;
    coordinates: number[][][];
}

export interface Iwinkelstraat {
    objectid: number;
    geometry: string;
    geometry2: IGeometry;
    shape?: any;
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straatnaam?: string;
    postcode: string;
    district: string;
    laagste_niveau: string;
    hoogste_niveau: string;
    lengte?: number;
    shape_length: string;
  }
  
export interface Paging {
    records: number;
    pages: number;
    pageCurrent: number;
    pageNext?: any;
    pagePrev?: any;
    pageSize: number;
  }


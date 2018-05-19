import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class MarvelService {
    apikey = "b26ebc1cda7557cffd998bcdb92e29d5";
    privateKey = "eb39270df3985571052a3756726d826c33f7c065";
    currenttime : number;
    constructor(private _http: HttpClient) { }


    GetHash(): string{
        this.currenttime = Date.now()/1000;
        var prehash : string 
        prehash = this.currenttime.toString() + this.privateKey + this.apikey
        return Md5.hashStr(prehash).toString()
    }

    GetCharacterNameBeginsWith(name:string,limit,offset): Observable<RootObject>{
        return this._http.get<RootObject>("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+ name + '&apikey=' + this.apikey + '&hash=' + this.GetHash() +'&ts='+ this.currenttime +"&limit="+limit+"&offset="+offset);
        //.do(data => { console.log(JSON.stringify(data)) }); //Test om te zien of de data wordt opgehaald
    }

    GetCharacterWithId(id): Observable<RootObject>{
        return this._http.get<RootObject>("https://gateway.marvel.com:443/v1/public/characters/"+ id + '?apikey=' + this.apikey + '&hash=' + this.GetHash() +'&ts='+ this.currenttime);
    }



}




        export interface RootObject {
            code: number;
            status: string;
            copyright: string;
            attributionText: string;
            attributionHTML: string;
            etag: string;
            data: Data;
        }
        export interface Data {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: Result[];
        }

        export interface Result {
            id: number;
            name: string;
            description: string;
            modified: Date;
            thumbnail: Thumbnail;
            resourceURI: string;
            comics: Comics;
            series: Series;
            stories: Stories;
            events: Events;
            urls: Url[];
        }

        export interface Url {
            type: string;
            url: string;
        }

        export interface Thumbnail {
            path: string;
            extension: string;
        }
    
        export interface Item {
            resourceURI: string;
            name: string;
        }
        export interface Item2 {
            resourceURI: string;
            name: string;
        }
        export interface Item3 {
            resourceURI: string;
            name: string;
            type: string;
        }
        export interface Item4 {
            resourceURI: string;
            name: string;
        }
    
    
        export interface Comics {
            available: number;
            collectionURI: string;
            items: Item[];
            returned: number;
        }
    
        export interface Series {
            available: number;
            collectionURI: string;
            items: Item2[];
            returned: number;
        }
    
        export interface Stories {
            available: number;
            collectionURI: string;
            items: Item3[];
            returned: number;
        }
    
        export interface Events {
            available: number;
            collectionURI: string;
            items: Item4[];
            returned: number;
        }
    
    
    
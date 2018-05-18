import { Component } from "@angular/core";
import { MarvelService  } from "../services/marvel.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent
{
    characters:Result[];
    character:Result;

    constructor(private _svc: MarvelService){}



}


interface RootObject {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}
interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}

interface Result {
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

interface Url {
    type: string;
    url: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Item {
    resourceURI: string;
    name: string;
}
interface Item2 {
    resourceURI: string;
    name: string;
}
interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
}
interface Item4 {
    resourceURI: string;
    name: string;
}


interface Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Series {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

interface Events {
    available: number;
    collectionURI: string;
    items: Item4[];
    returned: number;
}
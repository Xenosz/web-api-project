import { Component, OnInit } from "@angular/core";
import { MarvelService  } from "../services/marvel.service";

@Component({
    selector: 'app-marvel',
    templateUrl: './marvel.component.html'
})
export class MarvelComponent implements OnInit
{
    constructor(private _svc: MarvelService){}

    ngOnInit(): void { }
    character:Result;

    characters: Result[];
    searching: string;
    limit = 10;
    offset = 0;
    page = 0;
    public GetCharacters()
    {
        this.characters = null;
        this._svc.GetCharacterNameBeginsWith(this.searching,this.limit,this.offset).subscribe(result =>
            {
                this.characters = result.data.results;
                console.log(result);
                console.log(result.data.results);
            });
    }

    id: number;
    public GetCharacter()
    {
        this.character = null;
        this._svc.GetCharacterWithId(this.id).subscribe(result =>
            {
                this.character = result.data.results[0];
                console.log(result);
                console.log(this.character);
            });
    }

    public PageToOffset()
    {
        this.offset = this.page*this.limit;
        this.GetCharacters();
    }



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
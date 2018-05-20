import { Component, OnInit } from "@angular/core";
import { PeopleNJobsService  } from "../services/peoplenjobs.service";

@Component({
    selector: 'app-marvel',
    templateUrl: './marvel.component.html'
})
export class RestComponent implements OnInit
{
    constructor(private _svc: PeopleNJobsService){}

    ngOnInit(): void 
    {
        
    }
    limit = 10;
    offset = 0;
    page = 0;
    


}


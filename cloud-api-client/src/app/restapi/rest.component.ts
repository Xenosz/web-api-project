import { Component, OnInit } from "@angular/core";
import { Person,Job, PeopleNJobsService  } from "../services/peoplenjobs.service";

@Component({
    selector: 'app-rest',
    templateUrl: './rest.component.html'
})
export class RestComponent implements OnInit
{
    constructor(private _svc: PeopleNJobsService){}

    ngOnInit(): void 
    {
        this.GetAllPeople();
        this.GetAllJobs();
    }
    lenght = 3;
    page = 0;
    people:Person[];
    jobs:Job[];

    public GetAllPeople()
    {
        this._svc.GetAllPeople().subscribe(result =>
            {
                console.log(result);
                this.people = result;
            });
    }
    public GetAllJobs()
    {
        this._svc.GetAllJobs().subscribe(result =>
            {
                this.jobs = result;
                console.log(result);
            });
    }

    addjobname:string;
    addjobdescription:string;
    public AddJob()
    {
        var job:Job = {jobName :this.addjobname, jobDescription:this.addjobdescription, id:0 };
        console.log(job)
        this._svc.AddJob(job).subscribe(j => {
            console.log(j)
            this.GetAllJobs()
        });
        
    }



}


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class peoplenjobsService {
    constructor(private _http: HttpClient) { }



    GetPeopleByQuery(gender:string, firstname:string, lastname:string, page, length): Observable<Person[]>{
        return this._http.get<Person[]>("localhost:5000/api/v1/people?firstname="+ firstname +"&lastname="+ lastname +
         "&gender="+ gender+ "&page=" +page+"&lenght="+length);
        //.do(data => { console.log(JSON.stringify(data)) }); //Test om te zien of de data wordt opgehaald
    }

    GetAllPeople(): Observable<Person[]>{
        return this._http.get<Person[]>("localhost:5000/api/v1/people");
    }
    GetAllJobs(): Observable<Job[]>{
        return this._http.get<Job[]>("localhost:5000/api/v1/jobs");
    }

    AddJob(job:Job): object{
        return this._http.post("localhost:5000/api/v1/jobs",job,null);
    }



}



export interface Job {
    id: number;
    jobName: string;
    jobDescription: string;
}

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    job: Job;
}

    
    
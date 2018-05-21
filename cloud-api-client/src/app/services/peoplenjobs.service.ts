import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class PeopleNJobsService {
    constructor(private _http: HttpClient) { }
    userIdAuthToken = ""
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.userIdAuthToken
        })
      };
    GetPeopleByQuery(gender:string, firstname:string, lastname:string, page, length): Observable<Person[]>{
        return this._http.get<Person[]>("localhost:5000/api/v1/people?firstname="+ firstname +"&lastname="+ lastname +
         "&gender="+ gender+ "&page=" +page+"&lenght="+length);
        //.do(data => { console.log(JSON.stringify(data)) }); //Test om te zien of de data wordt opgehaald
    }

    GetAllPeople(): Observable<Person[]>{
        return this._http.get<Person[]>("http://localhost:5000/api/v1/people?page=0&length=50");
    }

    GetAllJobs(): Observable<Job[]>{
        return this._http.get<Job[]>("http://localhost:5000/api/v1/jobs?page=0&length=50");
    }

    AddJob(job:Job): Observable<Object>{
        return this._http.post<Job>("http://localhost:5000/api/v1/jobs/",job,this.httpOptions);
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

    
    
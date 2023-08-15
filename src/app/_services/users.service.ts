import { Injectable } from '@angular/core';
import { Records } from '../services/records'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService{
    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<Records[]>{
        return this.http.get<Records[]>("");
    }
}
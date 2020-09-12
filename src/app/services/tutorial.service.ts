

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { Tutorial } from "app/model/tutorial";


@Injectable()
export class TutorialsService {

    constructor(private http:HttpClient) { }

    //Get all Tutorials from Node server
    findAllTutorials(): Observable<Tutorial[]> {
        return this.http.get('/api/tutorials')
            .pipe(
                map(res => res['payload'])
            );
    }
}
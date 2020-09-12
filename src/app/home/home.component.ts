import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TutorialsService} from "../services/tutorial.service";
import {map} from "rxjs/operators";
import { Tutorial } from 'app/model/tutorial';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    tutorial$: Observable<Tutorial[]>;

    constructor(private TutorialsService: TutorialsService) { }

    ngOnInit() {
        this.tutorial$ = this.TutorialsService.findAllTutorials();
    }

}

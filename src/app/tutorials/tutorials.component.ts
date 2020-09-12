import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from "../model/tutorial";

@Component({
    selector: 'app-tutorials',
    templateUrl: './tutorials.component.html',
    styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
    @Input() tutorials: Tutorial[];
    constructor() { }

    ngOnInit() { }

}

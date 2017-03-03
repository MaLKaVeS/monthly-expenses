import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../../services/people.service';

@Component( {
    selector: 'app-people',
    templateUrl: './people.html',
    providers: [PeopleService]
})

export class PeopleComponent implements OnInit {

        ngOnInit(): void {

        }

}

import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable()
export class PeopleService {

    constructor() { }
        // private localStorageService: LocalStorageService) { }

    getCharacter(id: number): Promise<Person> {
        return Promise.resolve({} as Person);
            // .then(characters => characters.find(character => character.id == id)));

    }

    getCharacters(): Promise<Person[]> {

        return Promise.resolve([] as Person[]);
    }

    // getCharactersLocalStorage(): Promise<ArsCharacter[]> {
    //     return Promise.resolve(this.localStorageService.get('characters') || []);
    // }

    // saveCharacter(character: ArsCharacter): Boolean {
    //     let characters = <ArsCharacter[]>this.localStorageService.get('characters');
    //     if (!characters)
    //     {
    //         characters = [];
    //     }

    //     characters.push(character);

    //     this.localStorageService.set('characters', characters);
    //     return true;
    // }
}

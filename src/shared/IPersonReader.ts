import {Person} from './Person';

export interface IPersonReader {
    GetPeople(): Promise<Person[]>;
    GetPerson(id: number): Promise<Person>;
}

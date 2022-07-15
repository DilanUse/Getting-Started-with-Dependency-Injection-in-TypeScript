import { Person } from '../../shared/Person';

export interface IPeopleProvider {
    GetPeople: () => Person[];
}

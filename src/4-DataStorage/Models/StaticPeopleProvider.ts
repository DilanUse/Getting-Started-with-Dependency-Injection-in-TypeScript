import { faker } from '@faker-js/faker';
import { IPeopleProvider } from './IPeopleProvider';
import { Person } from '../../shared/Person';

export class StaticPeopleProvider implements IPeopleProvider {
    private users: Person[] = [];

    constructor() {
        Array.from({ length: 10 }).forEach(() => {
            this.users.push({
                id: Number(faker.random.numeric()),
                givenName: faker.name.firstName(),
                familyName: faker.name.lastName(),
                startDate: faker.date.past(),
                rating: Number(faker.random.numeric()),
            });
        });
    }

    public GetPeople(): Person[] {
        return this.users;
    }
}

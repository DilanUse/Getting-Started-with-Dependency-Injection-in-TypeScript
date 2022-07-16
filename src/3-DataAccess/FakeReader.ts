import {IPersonReader} from '../shared/IPersonReader';
import {Person} from '../shared/Person';
import {faker} from '@faker-js/faker';

export class FakeReader implements IPersonReader {
    private readonly _testData = Array.from({ length: 5 }).map((value, index) => (new Person(
            index,
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            Number(faker.random.numeric(2)),
        )));

    public async GetPeople(): Promise<Person[]> {
        return this._testData;
    }

    public async GetPerson(id: number): Promise<Person> {
        return <Person>this._testData.find((person) => person.id === id);
    }

}

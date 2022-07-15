import { MongoClient } from 'mongodb';
import {IPersonReader} from '../shared/IPersonReader';
import {Person} from '../shared/Person';

export class DBReader implements IPersonReader {
    private _client: MongoClient;
    private _connected = false;

    public constructor() {
        this._client = new MongoClient('mongodb://localhost:27017/DITypescriptCourse');
    }

    public async GetPeople(): Promise<Person[]> {
        await this.Connect();
        const people = await this._client.db().collection<Person>('people').find({}).toArray();

        return people.map((person) => new Person(
            person.id,
            person.givenName,
            person.familyName,
            new Date(person.startDate),
            person.rating,
        ));
    }

    public async GetPerson(id: number): Promise<Person> {
        await this.Connect();
        const person = await this._client.db().collection<Person>('people').findOne({ id });

        if (person) {
            return new Person(
                person.id,
                person.givenName,
                person.familyName,
                new Date(person.startDate),
                person.rating,
            );
        }

        return <Person>{};
    }

    private async Connect() {
        if (!this._connected) {
            await this._client.connect();
            this._connected = true;
        }
    }
}

import {IPersonReader} from '../shared/IPersonReader';
import {Person} from '../shared/Person';
import {Timestamp} from 'mongodb';

export class CachingReader implements IPersonReader {
    private _wrappedReader: IPersonReader;
    private _cacheDuration = 30;

    private _cachedItems: Person[] = [];
    private _dataDateTime: number = 0;

    public constructor(wrappedReader: IPersonReader) {
        this._wrappedReader = wrappedReader;
    }

    public async GetPeople(): Promise<Person[]> {
        await this.ValidateCache();
        return this._cachedItems;
    }

    public async GetPerson(id: number): Promise<Person> {
        await this.ValidateCache();
        return <Person>this._cachedItems.find((person) => person.id === id);
    }

    private async ValidateCache(): Promise<void> {
        const ms = Date.now() - this._dataDateTime;
        const sec = ms / 1000;

        try {
            if (sec > this._cacheDuration) {
                this._cachedItems = await this._wrappedReader.GetPeople();
                this._dataDateTime = Date.now();
            }
        } catch (err) {
            this._cachedItems = [];
        }
    }
}

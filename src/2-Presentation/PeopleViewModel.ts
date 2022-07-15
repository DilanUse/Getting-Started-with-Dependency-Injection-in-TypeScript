import {ServiceReader} from '../3-DataAccess/ServiceReader';
import {Person} from '../shared/Person';

export class PeopleViewModel {
    private _dataReader: ServiceReader;
    // @ts-ignore
    private _people: Person[];
    public people: Person[] | undefined;

    public constructor() {
        this._dataReader = new ServiceReader();
    }

    public async RefreshPeople(): Promise<void> {
        this.people = await this._dataReader.GetPeople();
    }

    public async ClearPeople(): Promise<void> {
        this.people = [];
    }


    public get dataReaderType(): string {
        return this._dataReader.constructor.name;
    }
}
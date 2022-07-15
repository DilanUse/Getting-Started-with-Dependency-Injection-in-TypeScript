import {Person} from '../shared/Person';
import {IPersonReader} from '../shared/IPersonReader';

export class PeopleViewModel {
    protected _dataReader: IPersonReader;
    // @ts-ignore
    private _people: Person[];
    public people: Person[] | undefined;

    public constructor(dataReader: IPersonReader) {
        this._dataReader = dataReader;
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

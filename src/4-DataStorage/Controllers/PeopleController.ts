import { IPeopleProvider } from '../Models/IPeopleProvider';
import { Person } from '../../shared/Person';

export class PeopleController {
    private provider: IPeopleProvider;

    public constructor(provider: IPeopleProvider) {
        this.provider = provider;
    }

    public Get(): Person[] {
        return this.provider.GetPeople();
    }

    public GetOne(id: number): Person | undefined {
        const people = this.provider.GetPeople();
        return people.find((p) => p.id === id);
    }
}

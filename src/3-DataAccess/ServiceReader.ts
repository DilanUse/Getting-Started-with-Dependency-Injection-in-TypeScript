import {Axios} from 'axios';
import { Person } from '../shared/Person';


export class ServiceReader {
    private client = new Axios({
        baseURL: 'http://localhost:4000/api',
        timeout: 1000,
        transformResponse: (data: any) => JSON.parse(data),
    });

    public async GetPeople(): Promise<Person[]> {
        const resp = await this.client.get<Person[]>('people');
        return resp.data;
    }

    public async GetPerson(id: number): Promise<Person> {
        const resp = await this.client.get<Person>(`people/${id}`);
        return resp.data;
    }
}

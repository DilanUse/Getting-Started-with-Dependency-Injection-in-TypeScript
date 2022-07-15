import {IPersonReader} from '../../shared/IPersonReader';
import {Person} from '../../shared/Person';
import {ICSVFileLoader} from './ICSVFileLoader';
import {CSVFileLoader} from './CSVFileLoader';

export class CSVReader implements IPersonReader {
    public fileLoader: ICSVFileLoader;

    public constructor() {
        const filePath = 'assets/people.csv';
        this.fileLoader = new CSVFileLoader(filePath);
    }


    async GetPeople(): Promise<Person[]> {
        const fileData = await this.fileLoader.LoadFile();
        const people = this.ParseDataString(fileData);
        return people;
    }

    async GetPerson(id: number): Promise<Person> {
        const people = await this.GetPeople();
        return <Person>people.find((person) => person.id === id);
    }

    private ParseDataString(csvData: string): Person[] {
        const lines = csvData.split('\n');

        return lines.map((line) => this.ParsePersonString(line));
    }

    private ParsePersonString(personData: string) : Person {
        const elements = personData.split(',');
        return new Person(
            parseInt(elements[0]),
            elements[1],
            elements[2],
            new Date(elements[3]),
            parseInt(elements[4]),
        );
    }

}

export class Person {
    public id: number;
    public givenName: string;
    public familyName: string;
    public startDate: Date;
    public rating: number;


    constructor(id: number, givenName: string, familyName: string, startDate: Date, rating: number) {
        this.id = id;
        this.givenName = givenName;
        this.familyName = familyName;
        this.startDate = startDate;
        this.rating = rating;
    }

    public toString(): string {
        return `${this.givenName} ${this.familyName}`;
    }
}

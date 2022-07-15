import { readFile } from 'fs/promises';
import {ICSVFileLoader} from './ICSVFileLoader';

export class CSVFileLoader implements ICSVFileLoader {
    private readonly _filePath: string;

    public constructor(filePath: string) {
        this._filePath = filePath;
    }

    public async LoadFile(): Promise<string> {
        return readFile(this._filePath, {
            encoding: 'utf-8',
        });
    }
}

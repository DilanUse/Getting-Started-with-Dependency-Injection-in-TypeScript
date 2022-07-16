import {ICSVFileLoader} from './ICSVFileLoader';

export enum DataType {
    Good,
    Mixed,
    Bad,
    Empty
}

export class FakeFileLoader implements ICSVFileLoader {
    private readonly _dataType: DataType;
    private static readonly _onlyGoodRecords = '' +
        '1,Frank,Randene,1987-10-08,7\n' +
        '3,Dacia,Elo,1909-07-09,2\n';
    private static readonly _withMixedRecords = '' +
    '1,Frank,Randene,1987-10-08,7\n' +
    'INVALID DATA\n' +
    '3,Dacia,Elo,1909-07-09,2\n';
    private static readonly _onlyBadRecords = `
    INVALID DATA\n
    MORE INVALID DATA\n
    `;

    public constructor(dataType: DataType) {
        this._dataType = dataType;
    }

    public async LoadFile(): Promise<string> {
        switch (this._dataType) {
            case DataType.Good: return FakeFileLoader._onlyGoodRecords;
            case DataType.Mixed: return FakeFileLoader._withMixedRecords;
            case DataType.Bad: return FakeFileLoader._onlyBadRecords;
            case DataType.Empty: return '';
            default: return FakeFileLoader._onlyGoodRecords;
        }
    }
}

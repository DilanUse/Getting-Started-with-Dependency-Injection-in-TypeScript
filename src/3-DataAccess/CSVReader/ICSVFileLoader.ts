export interface ICSVFileLoader {
    LoadFile(): Promise<string>;
}

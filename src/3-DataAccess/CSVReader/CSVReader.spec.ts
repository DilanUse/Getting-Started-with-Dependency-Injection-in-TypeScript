import {CSVReader} from './CSVReader';
import {DataType, FakeFileLoader} from './FakeFileLoader';

test('Get people with good records returns all records', async () => {
    // Arrange
    const reader = new CSVReader();
    reader.fileLoader = new FakeFileLoader(DataType.Good);

    // Act
    const result = await reader.GetPeople();

    // Assert
    expect(result.length).toBe(2);
});

test('Get people with some bad records returns good records', async () => {
    // Arrange
    const reader = new CSVReader();
    reader.fileLoader = new FakeFileLoader(DataType.Mixed);

    // Act
    const result = await reader.GetPeople();

    // Assert
    expect(result.length).toBe(2);
});

test('Get people with only bad records returns empty list', async () => {
    // Arrange
    const reader = new CSVReader();
    reader.fileLoader = new FakeFileLoader(DataType.Bad);

    // Act
    const result = await reader.GetPeople();

    // Assert
    expect(result.length).toBe(0);
});

test('Get people with empty file returns empty list', async () => {
    // Arrange
    const reader = new CSVReader();
    reader.fileLoader = new FakeFileLoader(DataType.Empty);

    // Act
    const result = await reader.GetPeople();

    // Assert
    expect(result.length).toBe(0);
});


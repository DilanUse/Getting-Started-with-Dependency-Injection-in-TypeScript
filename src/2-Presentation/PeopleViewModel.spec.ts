import {PeopleViewModel} from './PeopleViewModel';
import {FakeReader} from '../3-DataAccess/FakeReader';

test('People on refresh people is populated', async () => {
    // Arrange
    const reader = new FakeReader();
    const viewModel = new PeopleViewModel(reader);

    // Act
    await viewModel.RefreshPeople();

    // Assert
    expect(viewModel.people).not.toBeUndefined();
    expect(viewModel.people?.length).toBe(5);
});

test('People on clear people is empty', async () => {
   // Arrange
    const reader = new FakeReader();
    const viewModel = new PeopleViewModel(reader);
    await viewModel.RefreshPeople();
    expect(viewModel.people?.length).toBe(5);

    // Act
    await viewModel.ClearPeople();

    // Assert
    expect(viewModel.people?.length).toBe(0);
});

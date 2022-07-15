// @ts-ignore
import inquirer from 'inquirer';
import {PeopleViewModel} from '../2-Presentation/PeopleViewModel';

export class ConsoleView {
    private _viewModel: PeopleViewModel;

    constructor(viewModel: PeopleViewModel) {
        this._viewModel = viewModel;
    }

    public async show(separator = false) {
        if (separator) {
            console.log('\n----------------------------------\n');
        }

        const answers = await inquirer.prompt({
            name: 'selected',
            type: 'list',
            message: 'Select option\n',
            choices: [
                'Fetch People',
                'Clear Data',
            ],
        });

        if (answers.selected === 'Fetch People') {
            await this._viewModel.RefreshPeople();
            console.clear();
            this.showPeople();
            console.log(`<${this._viewModel.dataReaderType}>`);
            await this.show(true);
        } else {
            await this._viewModel.ClearPeople();
            console.clear();
            await this.show(false);
        }
    }

    private showPeople() {
        this._viewModel.people?.forEach((person) => {
            console.log(`[${person.toString()}] {${person.startDate.getFullYear()}} (${person.rating} / 10)`);
        });
    }
}

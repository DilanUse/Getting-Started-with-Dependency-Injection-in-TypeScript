import {ConsoleView} from '../1-View/ConsoleView';
import {PeopleViewModel} from '../2-Presentation/PeopleViewModel';
import {ServiceReader} from '../3-DataAccess/ServiceReader';
import {CSVReader} from '../3-DataAccess/CSVReader/CSVReader';
import {DBReader} from '../3-DataAccess/DBReader';

// const reader = new ServiceReader();
// const reader = new CSVReader();
const reader = new DBReader();
const viewModel = new PeopleViewModel(reader);
const consoleView = new ConsoleView(viewModel);

consoleView.show();

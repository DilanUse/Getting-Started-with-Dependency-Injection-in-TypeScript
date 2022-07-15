import {ConsoleView} from '../1-View/ConsoleView';
import {PeopleViewModel} from '../2-Presentation/PeopleViewModel';
import {ServiceReader} from '../3-DataAccess/ServiceReader';

const reader = new ServiceReader();
const viewModel = new PeopleViewModel(reader);
const consoleView = new ConsoleView(viewModel);

consoleView.show();

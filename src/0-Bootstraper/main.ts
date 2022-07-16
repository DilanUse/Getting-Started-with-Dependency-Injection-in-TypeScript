import {ConsoleView} from '../1-View/ConsoleView';
import {PeopleViewModel} from '../2-Presentation/PeopleViewModel';
import {ServiceReader} from '../3-DataAccess/ServiceReader';
import {CSVReader} from '../3-DataAccess/CSVReader/CSVReader';
import {DBReader} from '../3-DataAccess/DBReader';
import {CachingReader} from '../3-DataAccess/CachingReader';

const reader = new ServiceReader();
const cachingReader = new CachingReader(reader);
// const reader = new CSVReader();
// const reader = new DBReader();
const viewModel = new PeopleViewModel(cachingReader);
const consoleView = new ConsoleView(viewModel);

consoleView.show();

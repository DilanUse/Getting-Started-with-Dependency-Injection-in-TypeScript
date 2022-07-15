import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {PeopleViewModel} from '../../2-Presentation/PeopleViewModel';
import {ServiceReader} from '../../3-DataAccess/ServiceReader';

const reader = new ServiceReader();
const viewModel = new PeopleViewModel(reader);

createApp(App, {
    viewModel,
}).mount('#app');



import express from 'express';
import { PeopleController } from './Controllers/PeopleController';
import { StaticPeopleProvider } from './Models/StaticPeopleProvider';

const app = express();
const peopleController = new PeopleController(new StaticPeopleProvider());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/people', (req: express.Request, res: express.Response) => {
    const data = peopleController.Get();
    res.json(data);
});

app.get('/api/people/:id', (req: express.Request, res: express.Response) => {
    const { id } = req.query;
    const data = peopleController.GetOne(Number(id));
    res.json(data);
});

app.listen(4000, () => {
    console.log('listening in http://localhost:4000');
});

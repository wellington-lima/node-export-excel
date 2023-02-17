import express, {Request, Response} from 'express';
import { exportToExcelPrepare } from './extractData';

const app = express();

const port = 3000;

app.use(express.json())

app.listen(port, ()=> {

    console.log(`Server started on host ${port}`)
    console.log('Preparando exportação...');
    exportToExcelPrepare();
    console.log('Exportação concluída');

});

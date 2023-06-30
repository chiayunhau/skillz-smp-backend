import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/api/users', (req: Request, res: Response) => {
    try{
        console.log("Someone connected to /api/users")
        res.status(2000)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

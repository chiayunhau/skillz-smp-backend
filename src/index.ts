import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { error } from 'console';

const app = express();
app.use(bodyParser.json());

app.get('/api/users', (req: Request, res: Response) => {
    try{

    }catch(error){
        res.status(500).json(error)
    }
});

app.post('/api/users', (req: Request, res: Response) => {
  // Handle POST request for /api/users
  const { name } = req.body;
  const newUser = { id: 3, name };
  res.json(newUser);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

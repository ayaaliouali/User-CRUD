
import express from 'express';
import bodyParser from 'body-parser';

import connectDB from './src/config/db.js';

import  taskRouter  from './src/routes/tasks.js';
import authRouter from './src/routes/auth.js';
import userRouter from './src/routes/user.js';



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    res.send('Hello World');
}
);


app.use('/tasks', taskRouter);
app.use('/auth',authRouter);
app.use("/users",userRouter);

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
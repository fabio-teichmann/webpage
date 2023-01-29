import express from 'express';

const app = express();

// middleware
// app.use((req, res, next) => {
//     console.log("middleware");
//     next();
// });

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    const user = {
        name: 'Sally',
        hobby: 'hockey',
    }
    res.send(req.body);
});

app.listen(3000);
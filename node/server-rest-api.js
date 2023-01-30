import express from 'express';

// to make __dirname work while using ES modules
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

// middleware
// app.use((req, res, next) => {
//     console.log("middleware");
//     next();
// });

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// used to navigate to public folder to read index.html
app.use(express.static(__dirname + '/public'));


app.get('/:id', (req, res) => {
    // req.query --> GET query
    // console.log(req.query);
    // req.header
    // console.log(req.headers);
    // req.params --> uses parameter from url (e.g. /:id)
    console.log(req.params);
    // console.log(req.body);

    // res.send('getting root');
    res.status(404).send("not not found");
});

app.listen(3000);
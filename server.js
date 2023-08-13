import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import sequelize from './config/connection.js';

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
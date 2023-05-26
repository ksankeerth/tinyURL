import express from 'express';
import bodyParser from 'body-parser';
// https://stackoverflow.com/questions/65873101/node-requires-file-extension-for-import-statement/65874173#65874173
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import urlRoutes from './routes/urlRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(authRoutes);
app.use(projectRoutes);
app.use(urlRoutes);
app.use(userRoutes);




app.listen(port, () => {
  console.log("Server started listening on 3000;")
});

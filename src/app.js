const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");
const userRoutes = require('./routers/users.routes')
const courseRoutes = require('./routers/courses.routes')
const videoRoutes= require('./routers/videos.routes')
const categoryRoutes= require('./routers/categories.routes')

const app = express();
const PORT = 8000;
app.use(express.json());

db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});


app.use('/api/v1',userRoutes)
app.use('/api/v1',courseRoutes)
app.use('/api/v1',videoRoutes)
app.use('/api/v1',categoryRoutes)


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

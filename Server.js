const express = require("express");
const authRoutes = require("./middlewares/rutas");
const path = require("path");
const app = express();

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios
app.use("/styles", express.static(path.join(__dirname, "views", "Styles"))); // Archivos estáticos

// Rutas
app.use("/", authRoutes);

// Configuración del puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server of authentication running at http://localhost:${port}`);
});

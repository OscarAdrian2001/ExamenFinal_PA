// Oscar Dominguez
// Servidor principal para gestión de tareas

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// CONEXIÓN A MONGODB

mongoose.connect('mongodb://127.0.0.1:27017/tareasDB')
.then(() => console.log("MongoDB conectado correctamente"))
.catch(err => console.log(err));

// MODELO

const tareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaLimite: { type: Date, required: true },
    prioridad: { type: String, required: true },
    estado: { type: String, required: true }
});

const Tarea = mongoose.model('Tarea', tareaSchema);


// ENDPOINT REGISTRAR

app.post('/api/tareas', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ENDPOINT CONSULTAR

app.get('/api/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});

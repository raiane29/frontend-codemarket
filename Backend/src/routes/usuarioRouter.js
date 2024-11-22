import { Router } from "express";
import { create } from "../controllers/usuarioControllers.js";

const routerUsuario = Router();

routerUsuario.post('/cadastrar', create);


export default routerUsuario;

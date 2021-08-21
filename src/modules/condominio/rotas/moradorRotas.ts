import { Router } from "express";
import Moradorcontrolador from "../controladores/Moradorcontrolador";

const moradorRotas = Router();

moradorRotas.post('/', Moradorcontrolador.create);
moradorRotas.get('/',Moradorcontrolador.pegarTodos);
moradorRotas.get('/:idMorador', Moradorcontrolador.findById);
moradorRotas.delete('/:idMorador', Moradorcontrolador.delete);



export default moradorRotas;
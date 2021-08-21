import { Router } from "express";
import Moradorcontrolador from "../controladores/Moradorcontrolador";
import ReservaPiscinaControlador from "../controladores/ReservaPiscinaControlador";

const reservaPiscinaRotas = Router();

reservaPiscinaRotas.post('/', ReservaPiscinaControlador.create);
reservaPiscinaRotas.get('/',ReservaPiscinaControlador.pegarTodos);
reservaPiscinaRotas.get('/:idMorador', ReservaPiscinaControlador.findById);
reservaPiscinaRotas.delete('/:idMorador', ReservaPiscinaControlador.delete);



export default reservaPiscinaRotas;
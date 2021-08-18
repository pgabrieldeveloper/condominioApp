import { Router } from "express";
import ApartamentoControlador from "../controladores/ApartamentoControlador";

const apartamentoRotas = Router();

apartamentoRotas.post('/', ApartamentoControlador.create);
apartamentoRotas.get('/',ApartamentoControlador.pegarTodos);


export default apartamentoRotas;
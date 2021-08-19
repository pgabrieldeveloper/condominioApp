import { Router } from "express";
import ApartamentoControlador from "../controladores/ApartamentoControlador";

const apartamentoRotas = Router();

apartamentoRotas.post('/', ApartamentoControlador.create);
apartamentoRotas.get('/',ApartamentoControlador.pegarTodos);
apartamentoRotas.get('/:idApartamento', ApartamentoControlador.findById);
apartamentoRotas.delete('/:idApartamento', ApartamentoControlador.delete);



export default apartamentoRotas;
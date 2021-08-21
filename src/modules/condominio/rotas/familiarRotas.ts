import { Router } from "express";
import FamiliaresControlar from "../controladores/FamiliaresControlar";

const familiarRotas = Router();

familiarRotas.post('/', FamiliaresControlar.create);
familiarRotas.get('/:cdMorador',FamiliaresControlar.pegarTodos);
familiarRotas.get('/:idFamiliar', FamiliaresControlar.findById);
familiarRotas.delete('/:idFamiliar', FamiliaresControlar.delete);



export default familiarRotas;
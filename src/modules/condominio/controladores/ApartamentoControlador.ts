import ApartamentoService from "../services/ApartamentoService";
import {Request, Response} from 'express'

class ApartamentoControlador {

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            nrBloco,
            nrNumeroApartamento
        } = req.body;
        console.log(nrBloco,nrNumeroApartamento);
        const apartamento = await ApartamentoService.create({nrBloco,nrNumeroApartamento});
        return res.status(201).json(apartamento);
    }

    public async pegarTodos(req: Request, res: Response): Promise<Response> {
        const apartamentos = await ApartamentoService.getAll()
        return res.status(200).json(apartamentos);
    }
}

export default new ApartamentoControlador();
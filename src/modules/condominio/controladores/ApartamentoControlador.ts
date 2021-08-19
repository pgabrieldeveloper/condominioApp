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

    public async update(req: Request, res: Response): Promise<Response> {
        const {
            idApartamento,
            nrBloco,
            nrNumeroApartamento
        } = req.body
        const apartamento = await ApartamentoService.update({idApartamento,nrBloco,nrNumeroApartamento});
        return res.json(200).json(apartamento);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const {idApartamento} = req.params;
        return res.status(200).json(await ApartamentoService.findById({idApartamento:parseInt(idApartamento)}))
    }
}

export default new ApartamentoControlador();
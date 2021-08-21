import ApartamentoService from "../services/ApartamentoService";
import {Request, Response} from 'express'
import MoradorService from "../services/MoradorService";

class Moradorcontrolador {

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            dsNomeMorador,
            dsCpf,
            cdApartamento,
            dsContato,
            dsEmail
        } = req.body;
        
        const apartamento = await MoradorService.create(
            {
            dsNomeMorador,
            dsCpf,
            cdApartamento,
            dsContato,
            dsEmail
        });
        return res.status(201).json(apartamento);
    }
    public async pegarTodos(req: Request, res: Response): Promise<Response> {
        const apartamentos = await MoradorService.TodosMoradores()
        return res.status(200).json(apartamentos);
    }
  

    public async findById(req: Request, res: Response): Promise<Response> {
        const {idMorador} = req.params;
        return res.status(200).json(await MoradorService.findById({idMorador:parseInt(idMorador)}));
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const {idMorador} = req.params;
        await MoradorService.delete({idMorador:parseInt(idMorador)});
        return res.status(204).json();
    }
}

export default new Moradorcontrolador();
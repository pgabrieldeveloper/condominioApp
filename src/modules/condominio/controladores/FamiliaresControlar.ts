import {Request, Response} from 'express'
import FamiliarService from '../services/FamiliarService';
import MoradorService from "../services/MoradorService";

class Moradorcontrolador {

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            dsNome,
            dsCpf,
            cdApartamento,
            dsContato,
            dsEmail
        
        } = req.body;
        
        const familiar = await FamiliarService.create(
            {
                dsNome,
                dsCpf,
                cdApartamento,
                dsContato,
                dsEmail
            }
        );
        return res.status(201).json(familiar);
    }
    public async pegarTodos(req: Request, res: Response): Promise<Response> {
        const {cdMorador} = req.params;
        const familiares = await FamiliarService.Todosfamiliares({cdMorador:parseInt(cdMorador)});
        return res.status(200).json(familiares);
    }
  

    public async findById(req: Request, res: Response): Promise<Response> {
        const {idFamiliar} = req.params;
        return res.status(200).json(await FamiliarService.findById({idFamiliar:parseInt(idFamiliar)}));
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const {idFamiliar} = req.params;
        await FamiliarService.delete({idFamiliar:parseInt(idFamiliar)});
        return res.status(204).json();
    }
}

export default new Moradorcontrolador();
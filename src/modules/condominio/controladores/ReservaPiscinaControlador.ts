import {Request, Response} from 'express'
import FamiliarService from '../services/FamiliarService';
import ReservaPiscinaService from '../services/ReservaPiscinaService';

class ReservaPiscinaControlador {

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            dtReserva,
            hrReserva,
            cdMorador,
        
        } = req.body;
        
        const reservaPiscina = await ReservaPiscinaService.create(
            {
                dtReserva,
                hrReserva,
                cdMorador,
            }
        );
        return res.status(201).json(reservaPiscina);
    }
    public async pegarTodos(req: Request, res: Response): Promise<Response> {
        const {dtReserva} = req.body;
        const reservaPiscina = await ReservaPiscinaService.getAllday({dtReserva});
        return res.status(200).json(reservaPiscina);
    }
  

    public async findById(req: Request, res: Response): Promise<Response> {
        const {idReservaPiscina} = req.params;
        return res.status(200).json(await ReservaPiscinaService.findById({idReservaPiscina:parseInt(idReservaPiscina)}));
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const {idReservaPiscina} = req.params;
        await ReservaPiscinaService.delete({idReservaPiscina:parseInt(idReservaPiscina)});
        return res.status(204).json();
    }
}

export default new ReservaPiscinaControlador();
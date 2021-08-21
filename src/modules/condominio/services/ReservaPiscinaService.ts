import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ReservaPiscinaRepositorio from '../typeorm/repositorio/ReservaPiscinaRepositorio';
import ReservaPiscina from '../typeorm/entidade/ReservaPiscina';

interface IReservaPiscina { 
    idReservaPiscina?: number;
    dtReserva: Date;
    cdMorador?: number;
}

interface IRequest {
    idReservaPiscina: number;
}

class ApartamentoService {
  public async create({
    dtReserva,
    cdMorador
    
  }: IReservaPiscina): Promise<ReservaPiscina | undefined> {
    const repositorio = getCustomRepository(ReservaPiscinaRepositorio);
    const reservaPiscinaExiste = await repositorio.reservaPiscinaCountTen(dtReserva);  
    if(reservaPiscinaExiste) {
        if(reservaPiscinaExiste.length > 10){
            throw new AppError('Horario Lotado de pessoas', 500);
        }
        const reservaPiscina = repositorio.create({dtReserva, cdMorador});
        await repositorio.save(reservaPiscina);
        return reservaPiscina;

    }else {
        const reservaPiscina = repositorio.create({dtReserva, cdMorador});
        await repositorio.save(reservaPiscina);
        return reservaPiscina;
    }
  }

  public async getAllday({dtReserva}:IReservaPiscina): Promise<ReservaPiscina[] | undefined>{
    const repositorio = getCustomRepository(ReservaPiscinaRepositorio);
    const reservaPiscinaDay = await repositorio.reservaPiscinaCountTen(dtReserva);
    return reservaPiscinaDay;
  }

  public async findById({idReservaPiscina}: IReservaPiscina): Promise<ReservaPiscina | undefined>{
    const repositorio = getCustomRepository(ReservaPiscinaRepositorio);
    const reservaPiscinaExiste = await repositorio.findOne(idReservaPiscina);
    if(!reservaPiscinaExiste){
      throw new AppError('Error Reserva de piscina não encontrado', 404);
    }
    return reservaPiscinaExiste;
  }



  public async delete({idReservaPiscina}: IRequest): Promise<void>{
    const repositorio = getCustomRepository(ReservaPiscinaRepositorio);
    const reservaPiscinaExiste = await repositorio.findOne(idReservaPiscina);
    if(!reservaPiscinaExiste){
      throw new AppError('Error Reserva de piscina não encontrado', 404);
    }
    repositorio.delete(idReservaPiscina)

  }  

}

export default new ApartamentoService();
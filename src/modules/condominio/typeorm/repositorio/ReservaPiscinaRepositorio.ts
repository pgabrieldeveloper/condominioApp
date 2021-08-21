import { EntityRepository,  Repository } from 'typeorm';
import Morador from '../entidade/Morador';
import ReservaPiscina from '../entidade/ReservaPiscina';


@EntityRepository(ReservaPiscina)
class ReservaPiscinaRepositorio extends Repository<ReservaPiscina> {
  public async procurarPorData(dataReserva: Date): Promise<ReservaPiscina | undefined> {
    const ReservaPiscina = await this.findOne({
      where: {
        dataReserva
      }
    });
    return ReservaPiscina;
  }
}




export default  ReservaPiscinaRepositorio;


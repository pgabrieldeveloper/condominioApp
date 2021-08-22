import { EntityRepository,  Repository } from 'typeorm';
import reservaPiscinaRotas from '../../rotas/reservaPiscinaRotas';
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

  public async reservaPiscinaDataHora(dataReserva: Date, horaReserva:String): Promise<ReservaPiscina[] | undefined> {
    const reservaPiscina = await this.query("SELECT * FROM condominio.tb_reserva_piscina rp "
    + " WHERE rp.dt_reserva = $1 AND rp.hr_reserva = $2 ", [dataReserva,horaReserva]);
    return reservaPiscina;
  }

  public async getAllDay(dataReserva: Date): Promise<ReservaPiscina[] | undefined> {
    const reservaPiscina = await this.query("SELECT * FROM condominio.tb_reserva_piscina rp "
    + " WHERE rp.dt_reserva = $1", [dataReserva]);
    return reservaPiscina;  }

}

/*

  public async reservaPiscinaCountTen(dataReserva: Date, horaReserva:String): Promise<ReservaPiscina[] | undefined> {
    const reservaPiscina = await this.query("SELECT * FROM condominio.tb_reserva_piscina rp "
    + " WHERE rp.dt_reserva = $1 AND rp.hr_reserva = $2 ", [dataReserva,horaReserva]);
    return reservaPiscina;
  }

*/

 
export default  ReservaPiscinaRepositorio;


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

  public async reservaPiscinaCountTen(dataReserva: Date): Promise<ReservaPiscina[] | undefined> {
    const reservaPiscina = await this.createQueryBuilder()
    .select('reservaPiscina')
    .from(ReservaPiscina, 'reservaPiscina')
    .where('reservaPiscina.dtReserva = :dataReserva', {dataReserva})
    .getMany();
    return reservaPiscina;
  }

}

/*

import {getConnection} from "typeorm";

  const user = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id: 1 })
      .getOne();

*/

 
export default  ReservaPiscinaRepositorio;


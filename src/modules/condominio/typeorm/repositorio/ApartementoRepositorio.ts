import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';
import Apartamento from '../entidade/Apartamento';
import {getConnection} from "typeorm";


@EntityRepository(Apartamento)
class ApartamentoRepositorio extends Repository<Apartamento> {
  public async procurarPorBlocoENumero(nrBloco: number, nrNumeroApartamento: number): Promise<Apartamento | undefined> {
    const apartamento = await this.findOne({
      where: {
        nrBloco,
        nrNumeroApartamento
      },
    });
    return apartamento;
  }
}




export default  ApartamentoRepositorio;


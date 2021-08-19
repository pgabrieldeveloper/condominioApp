import { EntityRepository,  Repository } from 'typeorm';
import Apartamento from '../entidade/Apartamento';


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


import { EntityRepository,  Repository } from 'typeorm';
import Morador from '../entidade/Morador';


@EntityRepository(Morador)
class MoradorRepositorio extends Repository<Morador> {
  public async procurarPorCpf(dsCpf: string): Promise<Morador | undefined> {
    const morador = await this.findOne({
      where: {
        dsCpf
      },
    });
    return morador;
  }
}




export default  MoradorRepositorio;


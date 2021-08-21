import { EntityRepository,  Repository } from 'typeorm';
import Familiares from '../entidade/Familiares';


@EntityRepository(Familiares)
class FamiliaresRepositorio extends Repository<Familiares> {
  public async procurarPorCpf(dsCpf: string): Promise<Familiares | undefined> {
    const familiares = await this.findOne({
      where: {
        dsCpf
      },
    });
    return familiares;
  }
}




export default  FamiliaresRepositorio;


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

  public async procurarFamiliares(idMoradoar:number): Promise<Familiares[] | undefined> {
    const familiares = await this.query("select * from condominio.familiares f" + 
    " where f.cd_morador in (select id_morador from condominio.tb_morador m where m.id_morador = $1)", [idMoradoar])
    return familiares;
  }

}



export default  FamiliaresRepositorio;


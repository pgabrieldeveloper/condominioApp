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

/*

import { getManager } from 'typeorm';

  const entityManager = getManager();
  const someQuery = entityManager.query(`
  SELECT 
    fw."X",
    fw."Y",
    ew.*
  FROM "table1" as fw
  JOIN "table2" as ew
    ON fw."X" = $1 AND ew.id = fw."Y";
  `, [param1]);

*/


export default  FamiliaresRepositorio;


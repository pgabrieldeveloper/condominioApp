import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import FamiliaresRepositorio from '../typeorm/repositorio/FamiliaresRepositorio';
import Familiares from '../typeorm/entidade/Familiares';

interface IFamiliar { 
    idFamiliar?: number;
    dsNome?: string;
    dsCpf: string;
    cdApartamento?: number;
    dsContato?: string;
    dsEmail?: string;
    cdMorador?: number;
}

interface IRequest {
    idFamiliar: number;
}

interface IRequestMorador {
  cdMorador: number;
}

class FamiliarService {
  public async create({
    dsNome,
    dsCpf,
    cdApartamento,
    dsContato,
    dsEmail
    
  }: IFamiliar): Promise<Familiares | undefined> {
    const repositorio = getCustomRepository(FamiliaresRepositorio);
    
    const familiarExistes = await repositorio.procurarPorCpf(dsCpf);  
    if(familiarExistes) {
            throw new AppError('Familiar Ja cadastrato', 401);
    }
    const  familiares = repositorio.create({dsCpf,cdApartamento,dsNome,dsEmail,dsContato});
    await repositorio.save(familiares);
    return familiares;
  }

  public async Todosfamiliares({cdMorador}:IRequestMorador): Promise<Familiares[]| undefined>{
    const repositorio = getCustomRepository(FamiliaresRepositorio);
    if(!cdMorador){
        throw new AppError("Campo IdFamiliar é obrigatorio");
    }
    const familiares = await repositorio.procurarFamiliares(cdMorador);
    return familiares;
  }

  public async findById({idFamiliar}: IRequest): Promise<Familiares>{
    const repositorio = getCustomRepository(FamiliaresRepositorio);
    const familiarExistes = await repositorio.findOne(idFamiliar);
    if(!familiarExistes){
      throw new AppError('Error Familiar não encontrado', 404);
    }
    return familiarExistes;
  }



  public async delete({idFamiliar}: IRequest): Promise<void>{
    const repositorio = getCustomRepository(FamiliaresRepositorio);
    const familiarExistes = await repositorio.findOne(idFamiliar);
    if(!familiarExistes){
      throw new AppError('Error Morador não encontrado', 404);
    }
    if(!idFamiliar){
        throw new AppError('Campo id é obrigatorio', 401);
    }
    await repositorio.delete(idFamiliar)

  }  

}

export default new FamiliarService();
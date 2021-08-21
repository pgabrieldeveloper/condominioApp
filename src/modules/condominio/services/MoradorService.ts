import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ReservaPiscinaRepositorio from '../typeorm/repositorio/ReservaPiscinaRepositorio';
import ReservaPiscina from '../typeorm/entidade/ReservaPiscina';
import Morador from '../typeorm/entidade/Morador';
import MoradorRepositorio from '../typeorm/repositorio/MoradorRepositorio';

interface IMorador { 
    idMorador?: number;
    dsNomeMorador?: string;
    dsCpf: string;
    cdApartamento?: number;
    dsContato?: string;
    dsEmail?: string
}

interface IRequest {
    idMorador: number;
}

class ApartamentoService {
  public async create({
    dsNomeMorador,
    dsCpf,
    cdApartamento,
    dsContato,
    dsEmail
    
  }: IMorador): Promise<Morador | undefined> {
    const repositorio = getCustomRepository(MoradorRepositorio);
    
    const moradorExistes = await repositorio.procurarPorCpf(dsCpf);  
    if(moradorExistes) {
            throw new AppError('Morador Ja cadastrato', 401);
    }
    const  morador = repositorio.create({dsCpf,cdApartamento,dsNomeMorador,dsEmail,dsContato});
    await repositorio.save(morador);
    return morador;
  }

  public async TodosMoradores(): Promise<Morador[]>{
    const repositorio = getCustomRepository(MoradorRepositorio);
    const moradores = await repositorio.find();
    return moradores;
  }

  public async findById({idMorador}: IMorador): Promise<Morador>{
    const repositorio = getCustomRepository(MoradorRepositorio);
    const moradorExistes = await repositorio.findOne(idMorador);
    if(!moradorExistes){
      throw new AppError('Error Morador não encontrado', 404);
    }
    return moradorExistes;
  }



  public async delete({idMorador}: IMorador): Promise<void>{
    const repositorio = getCustomRepository(MoradorRepositorio);
    const moradorExists = await repositorio.findOne(idMorador);
    if(!moradorExists){
      throw new AppError('Error Morador não encontrado', 404);
    }
    if(!idMorador){
        throw new AppError('Campo id é obrigatorio', 401);
    }
    await repositorio.delete(idMorador)

  }  

}

export default new ApartamentoService();
import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Apartamento from '../typeorm/entidade/Apartamento';
import ApartamentoRepositorio from '../typeorm/repositorio/ApartementoRepositorio';

interface IApartamento { 
  idApartamento?: number;
    nrNumeroApartamento: number;
    nrBloco: number;
}

interface IRequest {
  idApartamento: number;
}

class ApartamentoService {
  public async create({
    nrBloco,
    nrNumeroApartamento
    
  }: IApartamento): Promise<Apartamento> {

    const apartamentoRepositorio = getCustomRepository(ApartamentoRepositorio);
    const apartamentoExiste = await apartamentoRepositorio.procurarPorBlocoENumero(nrBloco,nrNumeroApartamento);  
    if(apartamentoExiste) {
      throw new AppError('Apartamento Já Cadastrado', 400);
    }
    const apartamento = apartamentoRepositorio.create({nrBloco,nrNumeroApartamento});
    await apartamentoRepositorio.save(apartamento);
    return apartamento;
   
  }
  public async getAll(): Promise<Apartamento[] | undefined>{
    const apartamentoRepositorio = getCustomRepository(ApartamentoRepositorio);
    const apartamento = await apartamentoRepositorio.find();
    return apartamento;
  }

  public async findById({idApartamento}: IRequest): Promise<Apartamento | undefined>{
    const apartamentoRepositorio = getCustomRepository(ApartamentoRepositorio);
    const apartamento = await apartamentoRepositorio.findOne(idApartamento);
    return apartamento;

  }

  public async update ({idApartamento, nrBloco,nrNumeroApartamento}:IApartamento) : Promise<Apartamento | undefined> {
    const apartamentoRepositorio = getCustomRepository(ApartamentoRepositorio);
    const apartamentoExiste = await apartamentoRepositorio.findOne(idApartamento);
    if(!apartamentoExiste){
      throw new AppError('Error Apartamento não encontrado', 404);
    }
    apartamentoRepositorio.save(apartamentoExiste);
    return apartamentoExiste;
  }
}

export default new ApartamentoService();
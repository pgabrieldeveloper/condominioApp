import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Apartamento from '../typeorm/entidade/Apartamento';
import ApartamentoRepositorio from '../typeorm/repositorio/ApartementoRepositorio';

interface IApartamento { 
    nrNumeroApartamento: number;
    nrBloco: number;
}

class ApartamentoService {
  public async create({
    nrBloco,
    nrNumeroApartamento
    
  }: IApartamento): Promise<Apartamento> {

    const apartamentoRepositorio = getCustomRepository(ApartamentoRepositorio);
    console.log("Dentro do serviço", nrNumeroApartamento,nrBloco)

    const apartamentoExiste = await apartamentoRepositorio.procurarPorBlocoENumero(nrBloco,nrNumeroApartamento);
    console.log("Dentro do serviço", nrNumeroApartamento,nrBloco)
  
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
}

export default new ApartamentoService();
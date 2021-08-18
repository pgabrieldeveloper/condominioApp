import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"tb_apartamento", schema:"condominio",synchronize:false})
class Apartamento {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"id_apartamento"})
    idApartamento: number;

    @Column({name:'nr_numero_apartamento'})
    nrNumeroApartamento: number;

    @Column({name:'nr_bloco'})
    nrBloco: number;

}

export default Apartamento;


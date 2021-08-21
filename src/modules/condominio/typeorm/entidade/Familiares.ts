import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"familiares", schema:"condominio",synchronize:false})
class Familiares {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"id_familiares"})
    idFamiliares: number;

    @Column({name:'ds_nome'})
    dsNome: string;

    @Column({name:'ds_cpf'})
    dsCpf: string;

    @Column({name:"cd_apartamento"})
    cdApartamento: string;

    @Column({name:"ds_contato"})
    dsContato: string;

    @Column({name:"ds_email"})
    dsEmail: string;

    @Column({name:"nrIdade"})
    nrIdade: number

    @Column({name:"cd_morador"})
    cdMorador: number;
}

export default Familiares;


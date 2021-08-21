import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"tb_morador", schema:"condominio",synchronize:false})
class Morador {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"id_morador"})
    idMorador: number;

    @Column({name:'ds_nome_morador'})
    dsNomeMorador: string;

    @Column({name:'ds_cpf'})
    dsCpf: string;

    @Column({name:"cd_apartamento"})
    cdApartamento: string;

    @Column({name:"ds_contato"})
    dsContato: string;

    @Column({name:"ds_email"})
    dsEmail: string;
}

export default Morador;


import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"tb_reserva_salao_festa", schema:"condominio",synchronize:false})
class ReservaSalaoFesta {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"id_reserva_salao_festa"})
    idReservaChurrasco: number;

    @Column({name:'dt_reserva'})
    dtReserva: Date;

    @Column({name: 'hr_reserva'})
    hrReserva: string;

    @Column({name:'cd_morador'})
    cdMorador: number; 
}

export default ReservaSalaoFesta;


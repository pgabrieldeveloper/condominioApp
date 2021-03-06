import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"tb_reserva_piscina", schema:"condominio",synchronize:false})
class ReservaPiscina {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"id_reserva_piscina"})
    idReservaPiscina: number;

    @Column({name:'dt_reserva'})
    dtReserva: Date;

    @Column({name: 'hr_reserva'})
    hrReserva: string;

    @Column({name:'cd_morador'})
    cdMorador: number; 
}

export default ReservaPiscina;


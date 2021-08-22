import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"tb_reserva_churrasco", schema:"condominio",synchronize:false})
class ReservaChurrasco {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({name:"reserva_churrasco"})
    idReservaChurrasco: number;

    @Column({name:'dt_reserva'})
    dtReserva: Date;

    @Column({name: 'hr_reserva'})
    hrReserva: string;

    @Column({name:'cd_morador'})
    cdMorador: number; 
}

export default ReservaChurrasco;


import{ Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('product')
  export default class Product{
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @Column()
        price: number;

        @Column()
        description: string;

        @Column()
        created_at: Date;
        
        @Column()
        updated_at: Date;

    }
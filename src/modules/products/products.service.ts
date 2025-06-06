import { Delete, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Product from 'src/entities/products';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) 
        private readonly productRepository: Repository<Product> 
    ){}
    findAll(){
        return this.productRepository.find();
    }
    findOne(id: number){
        return this.productRepository.findOneBy({id});
    }
    create(productData: Partial<Product>
    ){
        const product = this.productRepository.create(productData);
        product.created_at = new Date();
        product.updated_at = new Date();
        return this.productRepository.save(product);
    }
    async update (id: number, productData: Partial<Product>){
        productData.updated_at = new Date();
        await this.productRepository.update(id, productData);
        return this.productRepository.findOneBy({id});
    }
    async delete(id:number){
        const product =await this.productRepository.findOneBy({id});
        await this.productRepository.delete(id);
        return product;
    }
}

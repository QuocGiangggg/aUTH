import { ArgumentMetadata, BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Patch, PipeTransform, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import { REQUEST } from '@nestjs/core';
// import { ValidationError } from 'class-validator';
// import { error } from 'console';  


export class customValidationPipe implements PipeTransform{
  constructor(@Inject(REQUEST) private readonly request: Request){}
  transform(value: any, metadata: ArgumentMetadata) {
    const id = this.request['params'].id
    const {name} = value;
    if(name === "DAS" && +id === 2){
      throw new BadRequestException('Ten Khong Hop le');
    }
    return value;
  }
}
@Controller('products')
// @UsePipes(
  // new ValidationPipe({ 
  //   transform: true,
  //   exceptionFactory: (ValidationError: ValidationError[] = []) => {
  //     return new BadRequestException(
  //       ValidationError.map((error) => ({
  //         [error.property]: Object.values(error.constraints ?? {})[0],
  //       })),
  //     );
  //   },
  //   }),


export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(@Req() req: Request & {user: string}){
    console.log(req.user)
    return this.productsService.findAll();
  }

  @Get(':id')
   async findOne(@Param('id') id: number){
    const product= await this.productsService.findOne(id);
    if(!product){
     throw new HttpException('Ko tìm thấy sản phẩm,', HttpStatus.NOT_FOUND); 
    }
    return product;
  }

  @Post()
  create(@Body() productData: CreateProductDto){
    return this.productsService.create(productData);
  }

  @Patch(':id')
  update(
   @Body(customValidationPipe)
   productData: UpdateProductDto , 
   @Param('id') id: number){
    
    return this.productsService.update(id, productData);
  }
  @Delete(':id')
  async delete(@Param('id') id:number){
    const product = await this.productsService.findOne(id);
      if(!product){
     throw new HttpException('Ko tìm thấy sản phẩm,', HttpStatus.NOT_FOUND); 
    }
    return this.productsService.delete(id);
  }

}

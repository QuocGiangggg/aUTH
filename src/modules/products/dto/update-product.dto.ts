import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export default class UpdateProductDto {
    id: number;
     @IsString({message: "Tên phải là chuỗi ký tự"})
     @IsNotEmpty({message:"Tên bắt buộc phải nhập"})
    name: string;
    @IsNumber({},{message: "Giá bắt buộc phải là số !"})
    price: number;
    @IsString({message: "Mô tả phải là chuỗi ký tự"})
    description: string;
}
import { IsNotEmpty, IsNumber, IsString, Length, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


@ValidatorConstraint()
export class isUpperCase implements ValidatorConstraintInterface{
    validate(text: string, validationArguments?: ValidationArguments){
        return text === text.toUpperCase();
    }
    }


    export default class CreateProductDto{
        @IsString({message: "Tên phải là chuỗi ký tự"})
        // @Length(1,255, {message: "Tên Bắt Buộc phải nhập!"})
        @IsNotEmpty({message:"Tên bắt buộc phải nhập"})
        @Validate( 
            isUpperCase, 
            {message: 'Tên phải viết in hoa'}
        )
        name: string;

        @IsNumber({},{message: "Giá bắt buộc phải là số !"})
        price:number;

        @IsString({message: "Mô tả phải là chuỗi ký tự"})
        description: string;
    }
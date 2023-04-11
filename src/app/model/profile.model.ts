import { FileHandle } from "./file-handle.model"

export interface Profile{
    pId :any,
    fullName:string,
    age:number ,
    gender: string,
    height:number ,
    contactNumber:number ,
    caste:string ,
    religion: string,
    star: string,
    motherTongue: string,
    residence: string,
    income: number,
    citizenship: string,
    education: string,
    description:string
    profileImages:FileHandle[]
    
}
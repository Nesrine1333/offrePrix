import { IPaginationOptions } from "nestjs-typeorm-paginate";

export interface IUserPagination extends IPaginationOptions {
    filters?: {
        email: string;
        matriculeFiscale?: string;
        name:string;
        

    };
}

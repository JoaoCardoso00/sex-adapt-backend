export interface IUserEntity {
    id?: string;
    email: string;
    password?: string;
    name: string;
    photo: string;
    createdAt: Date
}

//FAVORITES && ACCESSIBILITIES NOT YET IMPLEMENTED
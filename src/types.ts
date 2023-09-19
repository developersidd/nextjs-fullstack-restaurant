export type User =  {
    email: string;
   password: string;
   username: string;
   picture: string;
   forgorPasswordToken: string;
   forgotPasswordTokenExpiry: Date | undefined;
   verifyToken: string;
   verifyTokenExpiry: Date | undefined;
   isVerified: boolean;
   isAdmin: boolean;
}

<<<<<<< HEAD
export type QueryResponse<DataType> = {
    data: DataType,
    success: boolean,
    message: string
} 
=======
export type Food = {
    title: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    dimension: string;
    category: string;
}
>>>>>>> 32715497d311fea6bf2356e9a7ad9094cb583d10

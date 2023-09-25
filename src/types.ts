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
=======

>>>>>>> 4283c75f40229d6daf2bc5241ae6ac68527db281
export type QueryResponse<DataType> = {
    data: DataType,
    success: boolean,
    message: string
} 
<<<<<<< HEAD
=======

>>>>>>> 4283c75f40229d6daf2bc5241ae6ac68527db281
export type Food = {
    title: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    dimension: string;
    category: string;
}
<<<<<<< HEAD
=======

>>>>>>> 4283c75f40229d6daf2bc5241ae6ac68527db281

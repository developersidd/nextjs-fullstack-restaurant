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

export type Food = {
    title: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    dimension: string;
    category: string;
}
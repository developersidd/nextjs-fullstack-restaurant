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

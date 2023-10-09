export type TypeSearchParams = {
    [key: string]: string | string[] | undefined;
}
export type TypeUser = {
    _id: string;
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


export type QueryResponse<DataType> = {
    data: DataType,
    success: boolean,
    message: string
}

export type TypeFood = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    weight: number;
    dimension: string;
    category: string;
    reviews: TypeReview[];
}

export type TypeReview = {
    user: {
        id: string;
        picture: string;
        username: string;
    };
    message: string;
    rating: number;
    id: string;
    createdAt: Date;
    food: TypeFood;
}


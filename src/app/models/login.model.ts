export interface LoginModel {
    username: string;
    password: string;
}

export interface UserModel {
    id: string;
    name: string;
    password: string;
    roles: string;
    email: string;
    gender: string;
}

export interface Role {
    value: string;
    viewValue: string;
}

export interface RegisterModel {
    username: string;
    name: string;
    password: string;
    email: string;
    role: string;
    gender: string;
    terms: boolean;
}
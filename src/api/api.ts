import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '8fe373c6-ac19-4fc4-baf6-f60952b5767c',
    },
});

export type ResponseType<T = {}> = {
    data: T,
    messages: Array<string>,
    fieldsErrors:  Array<string>,
    resultCode: ResultsCode
}

export enum ResultsCode {
    SUCCESS = 0,
};
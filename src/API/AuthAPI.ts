import axios from "axios";

const API_KEY = 'AIzaSyAKEveTRoyBGwe97Hn4zO_fkJ9Tnycakvc'

const endpoints = {
    urlSignup: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    urlLogin: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
};

export interface PropsAuth {
    email: string,
    password: string,
    returnSecureToken: boolean,
}

class AuthApi {
    static async signUp(data: PropsAuth){
        
        try{
            const response = await axios.post(endpoints.urlSignup, data);
            return response;
        }
        catch(e){}
    }
    static async login(data: PropsAuth){
        try {
            const response = await axios.post(endpoints.urlLogin, data);
            return response;
        }
        catch(e) {
            
        }
    };
}

export  {AuthApi};
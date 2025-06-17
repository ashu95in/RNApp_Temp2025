import axiosInstance from "./axiosInstance";

export const signupApi = async(userData)=>{
    
    try{
    //    const resp = axiosInstance.post('/auth/signup',userData);
       return {
        msg:'otp send',
        otp:654879,
        data:userData
       }
    }catch(error){
        alert("error found !")
    }
} 

export const loginApi = async(userData)=>{
    
    try{
    //    const resp = axiosInstance.post('/auth/login',userData);
       return {
        msg:'login Success',
        token:'ae8hf94g65dgfhs7856ef4bew89r7w/hrjthy*jd789k54yr654fhnx89g7etwgahs8954e6gfhnxb89f/herrf4586',
       }
    }catch(error){
        alert("error found !")
    }
} 
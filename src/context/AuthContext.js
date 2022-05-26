import axios from "axios";
import React, { createContext, useState } from "react";
import { AsyncStorage } from "@react-native-community/async-storage";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [userInfo, setUserInfo] = useState({});

const [isLoading, setIsLoading] = useState(false);

const login = (username, password) => {

    console.log("entrou emLOGIn dentro de auth context ")
    setIsLoading(true);

    axios.post(`${BASE_URL}/auth/login`, {
        username, password
    }).then( res => {
        let userInfo = res.data;

        console.log("resposta oxi"+ res.data.authenticationToken);
        console.log("HELLOOOOOOOOOO "+ res.data.username);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

    }).catch(e => {
        //Alert.alert("WARN", "Login error")
        console.log(e)
    })


}


const register = (email, username, password) => {
    setIsLoading(true);
        axios.post(`${BASE_URL}/auth/signup`,{
            email,username,password
        }).then(res => {

            let userInfo= res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

            console.log(userInfo)
        }).catch(e=>{
            console.log(e.message)
            setIsLoading(false);
        });
        setIsLoading(false);
};

const logout = () => {

    console.log("entrou no log out ")
    setIsLoading(true);
        axios.post(`${BASE_URL}/auth/logout`,{ 
            
        }, {
headers: {Authorization:`Bearer ${userInfo.authenticationToken}`},

        }).then(res => {

            console.log("lo out retornou"+ res)
            // let userInfo= res.data;
            // setUserInfo(userInfo);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});


            console.log(userInfo)
        }).catch(e=>{
            console.log(e.message)
            setIsLoading(false);
        });
        setIsLoading(false);
};



 return (
   <AuthContext.Provider
     value={{
       login,
       isLoading,
       userInfo,
       register,
       logout
     }}
   >
     {children}
   </AuthContext.Provider>
 );

};

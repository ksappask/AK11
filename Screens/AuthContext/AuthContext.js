import { StyleSheet, Text, View } from 'react-native';
import React, {createContext, useState} from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
const [test, setTest] = useState('Test Value');
  return (
    <AuthProvider.Provider value={{test}}>
        {children}
    </AuthProvider.Provider>
  );
}


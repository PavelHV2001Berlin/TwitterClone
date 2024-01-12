import React, { useState } from 'react';
import { View, TextInput, Button, Text} from 'react-native';
import styled from "styled-components";
const LoginLayout = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
const FormLayout = styled.View`
width: 80%;
height: 200px;
justify-content: space-evenly;
`;
const LoginInput = styled(TextInput)`
padding: 10px;
border-width: 1px;
border-color: #ccc;
border-radius: 10px;
`
const LoginButton = styled(Button)`

`
export function Login({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Hier können Sie Ihre Anmelde-Logik implementieren
        console.log('Username:', username);
        console.log('Password:', password);
        // Fügen Sie hier Ihren Anmeldecode ein, z.B. eine API-Anfrage oder Authentifizierungslogik
        navigation.navigate("Home", {username: username, password: password})  
    };

    return <LoginLayout>
        <FormLayout>
            <LoginInput
                placeholder="Benutzername"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <LoginInput     
                placeholder="Passwort"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            
            <LoginButton color={"#123"} title="Anmelden" onPress={handleLogin} />
        </FormLayout>
       
    </LoginLayout>
}
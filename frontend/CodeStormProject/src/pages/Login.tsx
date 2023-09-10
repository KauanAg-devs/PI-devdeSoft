import React, { useState } from "react"; 
import { StyleSheet, Dimensions, Text } from 'react-native'
import ButtonLogin from "../components/ButtonLogin";
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { Input, NativeBaseProvider, Box, Icon, FormControl } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

export default function Login() {
    const [name, setName] = useState("")
    const [password, setpassword] = useState("")
    const navigation = useNavigation();

    
    function Submit(data: object) {
        /*
        if(password.length < 8) {
            console.warn("Digite 8 Caracteres");
            return;
        }
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            })
        )*/
        (async ()=> {
            const postUser = await axios.post('http://10.0.0.107:4516/api/post', {name, password})
            console.warn(postUser);
        
            })()
    } 
    

    function nameHandler(e: string) {
        setName(e)
    }
    function passwordHandler(e: string) {
        setpassword(e)
    }

    return(
        <NativeBaseProvider>
        <Box style={styles.container}>
            <Box style={styles.tituloContainer}>
                <Text style={styles.titulo}>CodeStorm</Text>
            </Box>
            <Box style={styles.form}>
                <Box style={styles.inputsContainer}>
                    <Input
                    id="cdcd"
                    value={name} 
                    onChangeText={nameHandler} 
                    style={styles.inputs} 
                    InputLeftElement={
                        <Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="muted.400" marginRight='2%' />}
                    />
                    <Input
                    id="dccd"
                    value={password}
                    onChangeText={passwordHandler}
                    InputLeftElement={
                        <Icon as={<MaterialIcons name="lock" />} size={7} ml="2" color="muted.400" marginRight='2%' />}
                    style={styles.inputs}
                   secureTextEntry={true}/>
                </Box>
                <ButtonLogin loading={false} onClick={Submit}/>
            </Box>
        </Box>
        </NativeBaseProvider>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16292E'
    },
    tituloContainer: {
       height: '10%',
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',

    },
    form: {
        height: Dimensions.get('window').height / 2.5,
        width: '70%',
        borderRadius: 5,
        gap: 40
    },
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        height: '60%',
        width: '100%',
        gap: 50
    },
    inputs: {
        width: '70%',
        height: '100%',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#42707A',
        borderRadius: 5,
        color: 'white'
    }
})
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
 
export default function App() {
  const [texto, setTexto] = useState('Chiquinho tem');
  const [numero, setNumero] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto} {numero} frutas </Text>
      <Button title="Pessoa" onPress={function(){ 
        if (texto == "Chiquinho tem"){
          setTexto("Mariazinha tem");
        }
        else{
          setTexto("Chiquinho tem")
        }
        }} />

       <View style={styles.mesmalinha}>
        <Button 
          title="fruta +" 
          onPress={function() {setNumero(numero + 1 )}} 
        />
        <Text> </Text>
        <Button 
          title="fruta -" 
          onPress={() => setNumero(numero - 1)} 
        />
      </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  mesmalinha:{
    flexDirection: 'row',
  }
});
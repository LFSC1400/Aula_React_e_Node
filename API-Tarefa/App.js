import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from "react";

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      {users.map(user => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.text}>
            <Text style={styles.label}>Nome: </Text>{user.name}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.label}>Email: </Text>{user.email}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.label}>Cidade: </Text>{user.address?.city}
          </Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default Usuarios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
  },

  label: {
    fontWeight: 'bold',
  },
});
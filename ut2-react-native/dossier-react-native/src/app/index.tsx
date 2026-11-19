import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
      <Link href="/practica01">Práctica 1</Link>
      <Link href="/practica02">Práctica 2</Link>
      <Link href="/practica03">Práctica 3</Link>
      <Link href="/practica04">Práctica 4</Link>
      <Link href="/practica05">Práctica 5</Link>
      <Link href="/practica06">Práctica 6</Link>
      <Link href="/practica07">Práctica 7</Link>
      <Link href="/practica08">Práctica 8</Link>
      <Link href="/practica09">Práctica 9</Link>
      <Link href="/practica10">Práctica 10</Link>
    </ScrollView>
  );
}

/*import { StyleSheet, Text, View } from 'react-native';
import InicioScreen from '../screens/InicioScreen';
//import PrincipalScreen from '../screens/PrincipalScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';

export default function Index() {
  return <CalculadoraScreen />;
}*/

// Práctica 1. Hola Mundo

/*export default function Index() {
  return (
    <View style={styles.pantalla}>
      <Text>¡Hola mundo! Soy Atteneri</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
  },
});*/

/*
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.caja}>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(n => n + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  caja: { alignItems: 'center', borderWidth: 2, padding: 20 },
});*/
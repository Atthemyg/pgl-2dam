import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica12Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica12/ColorAleatorio">Color Aleatorio</Link>
      <Link href="/practica12/SolicitarTexto">Solicitar Texto</Link>
    </View>
  );
}
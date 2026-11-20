import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica06Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica06/SustituirBotones">Sustituir los botones</Link>
      <Link href="/practica06/EstiloPorProps">Estilos recibidos por props</Link>
    </View>
  );
}

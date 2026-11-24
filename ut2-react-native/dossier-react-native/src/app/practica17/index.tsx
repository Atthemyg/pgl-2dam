import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica17Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica17/TarjetaIMC">Tarjeta IMC</Link>
      <Link href="/practica17/Iconos">Iconos</Link>
      <Link href="/practica17/FamiliaCorrecta">Familia Correcta</Link>
    </View>
  );
}
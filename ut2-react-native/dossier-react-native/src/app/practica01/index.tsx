import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica01Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica01/HolaMundo">Hola mundo</Link>
      <Link href="/practica01/ComponentesLayout">Componentes básicos y layout</Link>
    </View>
  );
}
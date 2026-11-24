import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica16Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica16/ListaProductos">Lista Productos</Link>
    </View>
  );
}
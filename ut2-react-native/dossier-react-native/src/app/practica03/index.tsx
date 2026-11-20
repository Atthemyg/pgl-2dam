import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica03Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica03/Inicio">InicioScreen y estilos separados</Link>
    </View>
  );
}

import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica05Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica05/FlexDinamico">Modificar flex dinámicamente</Link>
    </View>
  );
}

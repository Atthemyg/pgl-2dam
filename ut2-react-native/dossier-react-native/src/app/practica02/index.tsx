import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica02Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica02/Contador">Contador</Link>
    </View>
  );
}

import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica18Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica18/DiarioEmociones">Diario emociones</Link>
    </View>
  );
}
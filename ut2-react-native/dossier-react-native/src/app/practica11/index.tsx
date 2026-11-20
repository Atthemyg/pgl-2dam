import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica11Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica11/HookPersonalizado">Hook Personalizado</Link>
      <Link href="/practica11/Alertas">Alertas</Link>
    </View>
  );
}
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica04Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica04/TresCajas">Tres cajas</Link>
    </View>
  );
}

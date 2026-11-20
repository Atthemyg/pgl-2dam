import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica07Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica07/NombreEstilos">Nombre y estilos personalizados</Link>
      <Link href="/practica07/CirculosFlexWrap">flexWrap y flexDirection</Link>
    </View>
  );
}

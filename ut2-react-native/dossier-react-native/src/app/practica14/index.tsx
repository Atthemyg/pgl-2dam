import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica14Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica14/BordeActivado">Borde Activado</Link>
      <Link href="/practica14/Formularios">Formularios</Link>
      <Link href="/practica14/ActualizarCampo">Actualizar Campo</Link>
    </View>
  );
}
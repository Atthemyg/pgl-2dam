import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica14Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica15/CompletarFormulario">Completar Formulario</Link>
      <Link href="/practica15/Listas">Listas</Link>
    </View>
  );
}
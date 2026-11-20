import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica08Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica08/CirculosDinamicos">Círculos dinámicos</Link>
      <Link href="/practica08/JustifyAlign">TextInput, justifyContent y alignItems</Link>
      <Link href="/practica08/ImagenesContenedores">Contenedores anidados e imágenes</Link>
      <Link href="/practica08/ImagenesLocales">Imágenes locales y remotas</Link>
    </View>
  );
}

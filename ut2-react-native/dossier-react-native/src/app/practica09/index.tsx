import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Practica09Menu() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Link href="/practica09/Distribucion">Distribución, alineación e imágenes</Link>
      <Link href="/practica09/ColeccionImagenes">Imágenes locales desde una colección</Link>
      <Link href="/practica09/ImagenAleatoria">Práctica 9.1. Imagen aleatoria</Link>
      <Link href="/practica09/AlignContent">Más propiedades de layout</Link>
    </View>
  );
}

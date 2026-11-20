import { Stack } from 'expo-router';

export default function Practica09Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 9 - Apartados' }} />
      <Stack.Screen name="Distribucion" options={{ title: 'Distribución, alineación e imágenes' }} />
      <Stack.Screen name="ColeccionImagenes" options={{ title: 'Imágenes locales desde una colección' }} />
      <Stack.Screen name="ImagenAleatoria" options={{ title: 'Práctica 9.1. Imagen aleatoria' }} />
      <Stack.Screen name="AlignContent" options={{ title: 'Más propiedades de layout' }} />
    </Stack>
  );
}

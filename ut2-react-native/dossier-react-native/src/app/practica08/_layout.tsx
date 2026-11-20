import { Stack } from 'expo-router';

export default function Practica08Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 8 - Apartados' }} />
      <Stack.Screen name="CirculosDinamicos" options={{ title: 'Círculos dinámicos' }} />
      <Stack.Screen name="JustifyAlign" options={{ title: 'TextInput, justifyContent y alignItems' }} />
      <Stack.Screen name="ImagenesContenedores" options={{ title: 'Contenedores anidados e imágenes' }} />
      <Stack.Screen name="ImagenesLocales" options={{ title: 'Imágenes locales y remotas' }} />
    </Stack>
  );
}

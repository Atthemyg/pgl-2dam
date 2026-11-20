import { Stack } from 'expo-router';

export default function Practica03Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 3 - Apartados' }} />
      <Stack.Screen name="Inicio" options={{ title: 'InicioScreen y estilos separados' }} />
    </Stack>
  );
}

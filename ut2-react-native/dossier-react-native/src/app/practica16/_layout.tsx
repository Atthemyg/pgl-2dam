import { Stack } from 'expo-router';

export default function Practica16Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 16 - Lista de productos' }} />
      <Stack.Screen name="ListaProductos" options={{ title: 'ListaProductos' }} />
    </Stack>
  );
}

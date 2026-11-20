import { Stack } from 'expo-router';

export default function Practica07Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 7 - Apartados' }} />
      <Stack.Screen name="NombreEstilos" options={{ title: 'Nombre y estilos personalizados' }} />
      <Stack.Screen name="CirculosFlexWrap" options={{ title: 'flexWrap y flexDirection' }} />
    </Stack>
  );
}

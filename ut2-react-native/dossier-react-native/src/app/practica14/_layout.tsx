import { Stack } from 'expo-router';

export default function Practica14Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 14 - Apartados' }} />
      <Stack.Screen name="BordeActivado" options={{ title: 'Borde Activado' }} />
      <Stack.Screen name="Formularios" options={{ title: 'Formularios' }} />
      <Stack.Screen name="ActualizarCampo" options={{ title: 'Actualizar Campo' }} />
    </Stack>
  );
}

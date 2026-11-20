import { Stack } from 'expo-router';

export default function Practica15Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 15 - Apartados' }} />
      <Stack.Screen name="CompletarFormulario" options={{ title: 'Completar Formulario' }} />
      <Stack.Screen name="Listas" options={{ title: 'Listas' }} />
    </Stack>
  );
}

import React from 'react';
import { Stack } from 'expo-router';

export default function P20StackLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: '#198754' },
                headerTintColor: '#ffffff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: 'Inicio - Primer Stack' }}
            />
            <Stack.Screen
                name="Profile"
                options={{ title: 'Segunda Pantalla' }}
            />
            <Stack.Screen
                name="CambiarPantalla"
                options={{ title: 'Cambiar Pantalla' }}
            />
        </Stack>
    );
}

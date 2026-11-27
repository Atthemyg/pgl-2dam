import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CambiarPantallaScreen() {
    const router = useRouter();
    const { username } = useLocalSearchParams<{ username?: string }>();

    const volverAtras = () => {
        router.back();
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.tarjeta}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color="#6f42c1"
                    style={styles.icono}
                />
                <Text style={styles.titulo}>Cambiar Pantalla</Text>
                <Text style={styles.mensaje}>
                    Hola, {username ?? 'Invitado'}
                </Text>
                <Text style={styles.subtitulo}>
                    Parámetro recibido correctamente mediante useLocalSearchParams.
                </Text>

                <TouchableOpacity style={styles.botonVolver} onPress={volverAtras}>
                    <Ionicons name="arrow-back-outline" size={20} color="#ffffff" />
                    <Text style={styles.textoBoton}>Volver</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        padding: 20,
    },
    tarjeta: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    icono: {
        marginBottom: 12,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#212529',
        marginBottom: 8,
    },
    mensaje: {
        fontSize: 20,
        fontWeight: '700',
        color: '#6f42c1',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 15,
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: 24,
    },
    botonVolver: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6f42c1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        gap: 8,
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

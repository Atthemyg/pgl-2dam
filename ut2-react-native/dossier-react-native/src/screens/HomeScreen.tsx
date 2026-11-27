import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const router = useRouter();

    const irACambiarPantalla = () => {
        router.push({
            pathname: '/stack/p20/CambiarPantalla',
            params: { username: 'Atteneri' },
        });
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.tarjeta}>
                <Ionicons
                    name="layers-outline"
                    size={50}
                    color="#198754"
                    style={styles.icono}
                />
                <Text style={styles.titulo}>Home Screen</Text>
                <Text style={styles.subtitulo}>
                    Práctica 20. Primer Stack con Expo Router
                </Text>

                <Link href="/stack/p20/Profile" asChild>
                    <TouchableOpacity style={styles.boton}>
                        <Text style={styles.textoBoton}>Ir a Profile</Text>
                        <Ionicons name="arrow-forward-outline" size={20} color="#ffffff" />
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity
                    style={[styles.boton, styles.botonSecundario]}
                    onPress={irACambiarPantalla}
                >
                    <Text style={styles.textoBoton}>Ir a Cambiar Pantalla</Text>
                    <Ionicons name="arrow-forward-outline" size={20} color="#ffffff" />
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
    subtitulo: {
        fontSize: 15,
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: 24,
    },
    boton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#198754',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        gap: 8,
        width: '100%',
        marginBottom: 12,
    },
    botonSecundario: {
        backgroundColor: '#6f42c1',
        marginBottom: 0,
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
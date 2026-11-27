import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const router = useRouter();

    const volverAlOrigen = () => {
        router.back();
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.tarjeta}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color="#0d6efd"
                    style={styles.icono}
                />
                <Text style={styles.titulo}>Profile Screen</Text>
                <Text style={styles.subtitulo}>
                    Segunda pantalla dentro del Stack. Usa el botón o la flecha superior para volver.
                </Text>

                <TouchableOpacity style={styles.botonVolver} onPress={volverAlOrigen}>
                    <Ionicons name="arrow-back-outline" size={20} color="#ffffff" />
                    <Text style={styles.textoBoton}>Volver a Home</Text>
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
    botonVolver: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0d6efd',
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

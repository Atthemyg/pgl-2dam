import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OpcionEmoticono {
    id: string;
    icono: keyof typeof Ionicons.glyphMap;
    color: string;
    secuencia: string;
    etiqueta: string;
}

const EMOTICONOS: OpcionEmoticono[] = [
    { id: '1', icono: 'happy-outline', color: '#198754', secuencia: ':-)', etiqueta: 'Feliz' },
    { id: '2', icono: 'sad-outline', color: '#dc3545', secuencia: ':-(', etiqueta: 'Triste' },
    { id: '3', icono: 'sparkles-outline', color: '#ffc107', secuencia: ':-D', etiqueta: 'Genial' },
    { id: '4', icono: 'alert-circle-outline', color: '#0d6efd', secuencia: ':-O', etiqueta: 'Sorpresa' },
];

export default function InsertarEmoticonosScreen() {
    const [texto, setTexto] = useState<string>('');

    const insertarEmoticono = (secuencia: string) => {
        setTexto((actual) => `${actual} ${secuencia}`);
    };

    const limpiarTexto = () => {
        setTexto('');
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.cabecera}>
                <View style={styles.tituloContainer}>
                    <Ionicons
                        name="chatbox-ellipses-outline"
                        size={30}
                        color="#198754"
                        style={styles.iconoTitulo}
                    />
                    <Text style={styles.titulo}>Insertar Emoticonos</Text>
                </View>
            </View>

            <View style={styles.barraEmoticonos}>
                {EMOTICONOS.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.botonIcono}
                        onPress={() => insertarEmoticono(item.secuencia)}
                    >
                        <Ionicons name={item.icono} size={28} color={item.color} />
                        <Text style={styles.textoSecuencia}>{item.secuencia}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Escribe aquí o pulsa un icono arriba..."
                value={texto}
                onChangeText={setTexto}
                multiline
            />

            {texto.length > 0 && (
                <TouchableOpacity style={styles.botonLimpiar} onPress={limpiarTexto}>
                    <Ionicons name="trash-outline" size={20} color="#dc3545" />
                    <Text style={styles.textoLimpiar}>Borrar texto</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    cabecera: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    tituloContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconoTitulo: {
        marginRight: 8,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#212529',
    },
    barraEmoticonos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f8f9fa',
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
        marginBottom: 12,
    },
    botonIcono: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoSecuencia: {
        fontSize: 13,
        fontWeight: '600',
        color: '#495057',
        marginTop: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 10,
        padding: 12,
        minHeight: 120,
        textAlignVertical: 'top',
        fontSize: 16,
        backgroundColor: '#f8f9fa',
        color: '#212529',
    },
    botonLimpiar: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
        padding: 6,
    },
    textoLimpiar: {
        color: '#dc3545',
        fontWeight: '600',
        marginLeft: 4,
        fontSize: 14,
    },
});
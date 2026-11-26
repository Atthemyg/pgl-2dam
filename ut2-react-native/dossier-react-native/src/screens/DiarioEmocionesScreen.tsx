import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EntradaDiario {
    id: string;
    texto: string;
    fechaHora: string;
    icono: keyof typeof Ionicons.glyphMap;
    colorIcono: string;
}

export default function DiarioScreen() {
    const [texto, setTexto] = useState<string>('');
    const [entradas, setEntradas] = useState<EntradaDiario[]>([]);
    const [contador, setContador] = useState<number>(1);

    const detectarEmocion = (mensaje: string): {
        icono: keyof typeof Ionicons.glyphMap;
        colorIcono: string;
    } => {
        if (mensaje.includes(':-)')) {
            return { icono: 'happy-outline', colorIcono: '#198754' };
        }
        if (mensaje.includes(':-(')) {
            return { icono: 'sad-outline', colorIcono: '#dc3545' };
        }
        return { icono: 'remove-circle-outline', colorIcono: '#6c757d' };
    };

    const agregarEntrada = () => {
        if (texto.trim() === '') return;

        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const hora = ahora.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        const { icono, colorIcono } = detectarEmocion(texto);

        const nuevaEntrada: EntradaDiario = {
            id: contador.toString(),
            texto: texto.trim(),
            fechaHora: `${fecha} - ${hora}`,
            icono,
            colorIcono,
        };

        setEntradas((prevEntradas) => [nuevaEntrada, ...prevEntradas]);
        setContador((prev) => prev + 1);
        setTexto('');
        Keyboard.dismiss();
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.cabecera}>
                <View style={styles.tituloContainer}>
                    <Ionicons
                        name="book-outline"
                        size={30}
                        color="#198754"
                        style={styles.iconoTitulo}
                    />
                    <Text style={styles.titulo}>Diario de Emociones</Text>
                </View>
            </View>

            <View style={styles.formulario}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe cómo te sientes (usa :-) o :-()..."
                    value={texto}
                    onChangeText={setTexto}
                    multiline
                />

                <TouchableOpacity style={styles.botonGuardar} onPress={agregarEntrada}>
                    <Ionicons name="add-circle-outline" size={22} color="white" />
                    <Text style={styles.textoBoton}>Añadir entrada</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={entradas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarjeta}>
                        <View style={styles.tarjetaCabecera}>
                            <Text style={styles.fecha}>{item.fechaHora}</Text>
                            <Ionicons name={item.icono} size={26} color={item.colorIcono} />
                        </View>
                        <Text style={styles.textoEntrada}>{item.texto}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.textoVacio}>
                        No hay entradas todavía. Escribe algo arriba y pulsa el botón.
                    </Text>
                }
            />
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
        marginBottom: 15,
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
    formulario: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        textAlignVertical: 'top',
        fontSize: 15,
        backgroundColor: '#f8f9fa',
        marginBottom: 10,
    },
    botonGuardar: {
        backgroundColor: '#198754',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 6,
    },
    tarjeta: {
        backgroundColor: '#f8f9fa',
        padding: 14,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    tarjetaCabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    fecha: {
        fontSize: 13,
        color: '#6c757d',
        fontWeight: '600',
    },
    textoEntrada: {
        fontSize: 15,
        color: '#212529',
    },
    textoVacio: {
        textAlign: 'center',
        color: '#6c757d',
        marginTop: 25,
        fontSize: 15,
    },
});

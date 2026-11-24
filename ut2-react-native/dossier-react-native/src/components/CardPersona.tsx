import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

type CardPersonaProps = {
    id: string;
    onEliminar: (id: string) => void;
};

export default function CardPersona({ id, onEliminar }: CardPersonaProps) {
    const [nombre, setNombre] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const calcularIMC = (): string => {
    
        const alturaNum = parseFloat(altura.replace(',', '.'));
        const pesoNum = parseFloat(peso.replace(',', '.'));

        if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
            return '--';
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        return imc.toFixed(2);
    };

    return (
        <View style={styles.card}>
            <View style={styles.headerCard}>
                <Text style={styles.idTexto}>ID: {id}</Text>
                <TouchableOpacity
                    style={styles.botonEliminar}
                    onPress={() => onEliminar(id)}
                >
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <View style={styles.filaInputs}>
                <TextInput
                    style={[styles.input, styles.inputMitad]}
                    placeholder="Altura (m) ej: 1.75"
                    keyboardType="numeric"
                    value={altura}
                    onChangeText={setAltura}
                />
                <TextInput
                    style={[styles.input, styles.inputMitad]}
                    placeholder="Peso (kg) ej: 70"
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={setPeso}
                />
            </View>

            <View style={styles.resultadoContainer}>
                <Text style={styles.resultadoTexto}>
                    IMC {nombre ? `de ${nombre}` : ''}:{' '}
                    <Text style={styles.valorImc}>{calcularIMC()}</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    idTexto: {
        fontSize: 12,
        color: '#6c757d',
        fontWeight: 'bold',
    },
    botonEliminar: {
        backgroundColor: '#dc3545',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textoEliminar: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    filaInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    inputMitad: {
        flex: 1,
    },
    resultadoContainer: {
        marginTop: 5,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
    },
    resultadoTexto: {
        fontSize: 16,
        color: '#212529',
    },
    valorImc: {
        fontWeight: 'bold',
        color: '#0d6efd',
        fontSize: 18,
    },
});

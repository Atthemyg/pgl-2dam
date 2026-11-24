import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type CardPersonaFamiliaProps = {
    id: string;
    onEliminar: (id: string) => void;
};

export default function CardPersonaFamilia({ id, onEliminar }: CardPersonaFamiliaProps) {
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
                    <Ionicons name="trash-outline" size={22} color="#dc3545" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputConIcono}>
                <Ionicons name="person-outline" size={20} color="#6c757d" style={styles.iconoInput} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
            </View>

            <View style={styles.filaInputs}>
                <View style={[styles.inputConIcono, styles.inputMitad]}>
                    <MaterialCommunityIcons name="human-male-height" size={20} color="#6c757d" style={styles.iconoInput} />
                    <TextInput
                        style={styles.input}
                        placeholder="Altura (m)"
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={setAltura}
                    />
                </View>

                <View style={[styles.inputConIcono, styles.inputMitad]}>
                    <MaterialCommunityIcons name="weight-kilogram" size={20} color="#6c757d" style={styles.iconoInput} />
                    <TextInput
                        style={styles.input}
                        placeholder="Peso (kg)"
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />
                </View>
            </View>

            <View style={styles.resultadoContainer}>
                <Ionicons name="calculator-outline" size={20} color="#0d6efd" style={styles.iconoResultado} />
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
        padding: 4,
    },
    inputConIcono: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    iconoInput: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
    },
    iconoResultado: {
        marginRight: 6,
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

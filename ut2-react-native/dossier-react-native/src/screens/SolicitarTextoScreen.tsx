
import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Modal,
    TextInput,
    Alert,
} from 'react-native';

export default function AlertasScreen() {

    const [fondo, setFondo] = useState('green');
    const [visible, setVisible] = useState(false);
    const [colorEscrito, setColorEscrito] = useState('lightblue');

    function aceptarColor() {
        const color = colorEscrito.trim();

        if (!color) {
            Alert.alert('Error', 'Escribe un color antes de aceptar.');
            return;
        }

        setFondo(color);
        setVisible(false);
    }

    return (
        <View style={[styles.contenedor, { backgroundColor: fondo }]}>

            <Text style={styles.titulo}>
                Cambiar color de fondo
            </Text>

            <Text style={styles.texto}>
                Color actual: {fondo}
            </Text>

            <Button
                title="Cambiar color"
                onPress={() => setVisible(true)}
            />

            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.fondoModal}>

                    <View style={styles.modal}>

                        <Text style={styles.tituloModal}>
                            Escribe un color
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={colorEscrito}
                            onChangeText={setColorEscrito}
                            placeholder="Color CSS"
                            autoCapitalize="none"
                        />

                        <View style={styles.botones}>

                            <Button
                                title="Cancelar"
                                onPress={() => setVisible(false)}
                                color="red"
                            />

                            <Button
                                title="Aceptar"
                                onPress={aceptarColor}
                                color="green"
                            />

                        </View>

                    </View>

                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    texto: {
        fontSize: 20,
        color: 'white',
        marginBottom: 30,
    },
    fondoModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0008',
    },
    modal: {
        width: '85%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
    },
    tituloModal: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        color: 'black',
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

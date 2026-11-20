
import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Modal,
    TextInput,
    Alert,
    Switch,
} from 'react-native';

export default function AlertasScreen() {

    const [fondo, setFondo] = useState('green');
    const [visible, setVisible] = useState(false);
    const [colorEscrito, setColorEscrito] = useState('lightblue');
    const [activo, setActivo] = useState(false);

    const coloresValidos = [
        'red', 'blue', 'green', 'yellow',
        'purple', 'orange', 'pink', 'black',
        'white', 'gray', 'grey', 'lightblue',
        'brown', 'cyan', 'magenta',
    ];

    function aceptarColor() {
        const color = colorEscrito.trim().toLowerCase();

        const esValido =
            coloresValidos.includes(color) ||
            /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color);

        if (!esValido) {
            Alert.alert(
                'Color no válido',
                'Introduce un nombre de color válido o un código hexadecimal.'
            );
            return;
        }

        setFondo(color);
        setVisible(false);
    }

    return (
        <View style={[styles.contenedor, { backgroundColor: fondo }]}>

            <Text style={styles.titulo}>
                Práctica 13
            </Text>

            <Text style={styles.texto}>
                Introducir el color
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
                            Introduce un color
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
                                color="red"
                                onPress={() => setVisible(false)}
                            />

                            <Button
                                title="Aceptar"
                                color="green"
                                onPress={aceptarColor}
                            />

                        </View>

                    </View>

                </View>
            </Modal>

            <View style={styles.switchContainer}>

                <Text style={styles.texto}>
                    Ejemplo Switch:
                </Text>

                <Switch
                    value={activo}
                    onValueChange={setActivo}
                    thumbColor={activo ? 'orange' : 'brown'}
                    trackColor={{
                        false: 'blue',
                        true: 'red',
                    }}
                />

                <Text style={styles.texto}>
                    {activo ? 'Activado' : 'Desactivado'}
                </Text>

            </View>

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
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
    },

    texto: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
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

    switchContainer: {
        alignItems: 'center',
        marginTop: 40,
    },

});

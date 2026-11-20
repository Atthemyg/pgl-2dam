import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type JustifyContentType =
      'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

type AlignItemsType = 'stretch' | 'center' | 'flex-start' | 'flex-end';

const VALORES_JUSTIFY: JustifyContentType[] = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
];

export default function JustifyAlignScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('flex-end');

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    return (
        <View style={styles.contenedorPrincipal}>

            <TextInput
                style={styles.input}
                placeholder="center, space-around..."
                value={textoInput}
                onChangeText={manejarCambioTexto}
                autoCapitalize="none"
            />

            <View style={styles.panelBotones}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => setAlignActual('stretch')}
                >
                    <Text style={styles.textoBoton}>STRETCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => setAlignActual('center')}
                >
                    <Text style={styles.textoBoton}>CENTER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => setAlignActual('flex-start')}
                >
                    <Text style={styles.textoBoton}>FLEX-START</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => setAlignActual('flex-end')}
                >
                    <Text style={styles.textoBoton}>FLEX-END</Text>
                </TouchableOpacity>
            </View>

            <View
                style={[
                    styles.escenario,
                    { justifyContent: justifyActual, alignItems: alignActual },
                ]}
            >
                <View style={styles.cajaEmoji}>
                    <Text style={styles.emoji}>⭐</Text>
                </View>

                <View style={styles.cajaEmoji}>
                    <Text style={styles.emoji}>❤️</Text>
                </View>

                <View style={styles.cajaEmoji}>
                    <Text style={styles.emoji}>📦</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#a39f9f',
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 14,
        marginBottom: 8,
    },
    panelBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
        marginBottom: 12,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
    },
    cajaEmoji: {
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 30,
    },
});

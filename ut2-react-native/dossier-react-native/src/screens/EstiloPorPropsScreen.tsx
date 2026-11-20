import { useState } from 'react';
import { Alert, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';

type CajaProps = {
    valorFlex: number;
    onRestar: () => void;
    onSumar: () => void;
    style?: StyleProp<ViewStyle>;
};

function Caja({ valorFlex, onRestar, onSumar, style }: CajaProps) {
    return (
        <View style={[styles.cajaBase, style, { flex: valorFlex }]}>
            <Text style={styles.texto}>{valorFlex}</Text>
            <View style={styles.botones}>
                <TouchableOpacity style={styles.boton} onPress={onRestar}>
                    <Text style={styles.textoBoton}>-</Text>
                </TouchableOpacity>
                <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={onSumar}>
                    <Text style={styles.textoBoton}>+</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default function EstiloPorPropsScreen() {
    const [valorFlex1, setValorFlex1] = useState(1);
    const [valorFlex2, setValorFlex2] = useState(1);
    const [valorFlex3, setValorFlex3] = useState(1);

    const aumentarFlex = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        Alert.alert('Flex aumentado', 'Se ha sumado +1 al valor flex');
        setter(n => n + 1);
    };

    return (
        <View style={styles.contenedorPrincipal}>
            <Text style={styles.titulo}>Contenedor Principal</Text>

            <View style={styles.escenario}>
                <Caja
                    valorFlex={valorFlex1}
                    onRestar={() => setValorFlex1(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex1)}
                />

                <Caja
                    valorFlex={valorFlex2}
                    style={{ backgroundColor: '#769ed1' }}
                    onRestar={() => setValorFlex2(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex2)}
                />

                <Caja
                    valorFlex={valorFlex3}
                    style={{ backgroundColor: '#346417' }}
                    onRestar={() => setValorFlex3(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex3)}
                />
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        marginBottom: 15,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
        gap: 15,
    },
    cajaBase: {
        width: 100,
        height: 100,
        backgroundColor: '#7f624e',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    botones: {
        flexDirection: 'row',
        gap: 5,
    },
    boton: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

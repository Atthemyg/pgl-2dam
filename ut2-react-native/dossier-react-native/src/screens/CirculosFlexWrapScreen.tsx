import { useState } from 'react';
import { Alert, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
    nombre: string;
    valorFlex: number;
    onRestar: () => void;
    onSumar: () => void;
    style?: StyleProp<ViewStyle>;
};

const colores = [
    '#e53935', '#8e24aa', '#3949ab', '#039be5',
    '#00897b', '#43a047', '#fdd835', '#fb8c00',
    '#6d4c41', '#546e7a',
];

function Caja({ nombre, valorFlex, onRestar, onSumar, style }: Props) {
    return (
        <View style={[styles.porDefecto, style, { flex: valorFlex }]}>
            <Text style={styles.nombreCaja}>{nombre}</Text>
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

export default function CirculosFlexWrapScreen() {
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
                    nombre="Caja A"
                    valorFlex={valorFlex1}
                    onRestar={() => setValorFlex1(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex1)}
                />

                <Caja
                    nombre="Caja B"
                    valorFlex={valorFlex2}
                    style={{
                        backgroundColor: '#769ed1',
                        borderRadius: 20,
                        borderWidth: 7,
                        borderColor: '#1b3b6f',
                    }}
                    onRestar={() => setValorFlex2(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex2)}
                />

                <Caja
                    nombre="Caja C"
                    valorFlex={valorFlex3}
                    style={{
                        backgroundColor: '#346417',
                        borderRadius: 12,
                        borderWidth: 4,
                        borderStyle: 'dashed',
                        borderColor: 'white',
                    }}
                    onRestar={() => setValorFlex3(n => Math.max(0, n - 1))}
                    onSumar={() => aumentarFlex(setValorFlex3)}
                />

                <View style={styles.contenedorCirculos}>
                    {colores.map((color, index) => (
                        <View
                            key={index}
                            style={[styles.circulo, { backgroundColor: color }]}
                        />
                    ))}
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
    porDefecto: {
        width: 120,
        height: 110,
        backgroundColor: '#7f624e',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nombreCaja: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 2,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
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
    contenedorCirculos: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    circulo: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});

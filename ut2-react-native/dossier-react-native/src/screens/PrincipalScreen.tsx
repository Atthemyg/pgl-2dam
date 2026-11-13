// Practica 4. Tres cajas

/*import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PrincipalScreen() {
    const [valorFlex, setValorFlex] = useState(0);
    return (
        <View style={styles.contenedorPrincipal}>
            <Text style={styles.titulo}>Contenedor Principal</Text>

            <View style={styles.escenario}>
                <View style={[styles.caja, { backgroundColor: '#7f624e' }]} />
                <View style={[styles.caja2, { backgroundColor: '#769ed1' }]} />
                <View style={[styles.caja3, { backgroundColor: '#346417' }]} />
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
    caja: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    caja2: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    caja3: {
        width: 100,
        //height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
});*/


import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function PrincipalScreen() {
    const [valorFlex1, setValorFlex1] = useState(1);
    const [valorFlex2, setValorFlex2] = useState(1);
    const [valorFlex3, setValorFlex3] = useState(1);

    return (
        <View style={styles.contenedorPrincipal}>
            <Text style={styles.titulo}>Contenedor Principal</Text>

            <View style={styles.escenario}>
                <View style={[styles.caja, { flex: valorFlex1 }]}>
                    <Text style={styles.texto}>{valorFlex1}</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => setValorFlex1(n => Math.max(0, n - 1))}>
                            <Text style={styles.textoBoton}>-</Text>
                        </TouchableOpacity>
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => setValorFlex1(n => n + 1)}>
                            <Text style={styles.textoBoton}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={[styles.caja2, { flex: valorFlex2 }]}>
                    <Text style={styles.texto}>{valorFlex2}</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => setValorFlex2(n => Math.max(0, n - 1))}>
                            <Text style={styles.textoBoton}>-</Text>
                        </TouchableOpacity>
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => setValorFlex2(n => n + 1)}>
                            <Text style={styles.textoBoton}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={[styles.caja3, { flex: valorFlex3 }]}>
                    <Text style={styles.texto}>{valorFlex3}</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => setValorFlex3(n => Math.max(0, n - 1))}>
                            <Text style={styles.textoBoton}>-</Text>
                        </TouchableOpacity>
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => setValorFlex3(n => n + 1)}>
                            <Text style={styles.textoBoton}>+</Text>
                        </TouchableHighlight>
                    </View>
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
    caja: {
        width: 100,
        height: 100,
        backgroundColor: '#7f624e',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caja2: {
        width: 100,
        height: 100,
        backgroundColor: '#769ed1',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caja3: {
        width: 100,
        height: 100,
        backgroundColor: '#346417',
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
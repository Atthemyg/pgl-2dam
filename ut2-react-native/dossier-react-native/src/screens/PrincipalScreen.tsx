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

// Practica 5. Modificar flex dinámicamente

/*
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
});*/ 

// Practica 6. Sustituir los botones

/*import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function PrincipalScreen() {
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
                <View style={[styles.caja, { flex: valorFlex1 }]}>
                    <Text style={styles.texto}>{valorFlex1}</Text>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.boton} onPress={() => setValorFlex1(n => Math.max(0, n - 1))}>
                            <Text style={styles.textoBoton}>-</Text>
                        </TouchableOpacity>
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => aumentarFlex(setValorFlex1)}>
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
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => aumentarFlex(setValorFlex2)}>
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
                        <TouchableHighlight style={styles.boton} underlayColor="#ddd" onPress={() => aumentarFlex(setValorFlex3)}>
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
});*/

/*import { useState } from 'react';
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

export default function PrincipalScreen() {
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
});*/

// Practica 7. Nombre y estilos personalizados

/*import { useState } from 'react';
import { Alert, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
    nombre: string;
    valorFlex: number;
    onRestar: () => void;
    onSumar: () => void;
    style?: StyleProp<ViewStyle>;
};

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

export default function PrincipalScreen() {
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
});*/

/*import { useState } from 'react';
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

export default function PrincipalScreen() {
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
});*/

// Práctica 8. Círculos dinámicos

/*import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Circulo {
    id: number;
    color: string;
}

export default function PrincipalScreen() {
    const [circulos, setCirculos] = useState<Circulo[]>([]);
    const [tipoWrap, setTipoWrap] = useState<'wrap' | 'nowrap'>('wrap');
    const [tipoDirection, setTipoDirection] = useState<'row' | 'column'>('row');

    const generarColor = () => {
        const r = Math.min(255, Math.floor(Math.random() * 120) + 140);
        const g = Math.min(255, Math.floor(Math.random() * 120) + 140);
        const b = Math.min(255, Math.floor(Math.random() * 120) + 140);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const agregarCirculo = () => {
        const nuevoCirculo: Circulo = {
            id: circulos.length + 1,
            color: generarColor(),
        };
        setCirculos([...circulos, nuevoCirculo]);
    };

    const alternarWrap = () => {
        setTipoWrap(prev => (prev === 'wrap' ? 'nowrap' : 'wrap'));
    };

    const alternarDirection = () => {
        setTipoDirection(prev => (prev === 'row' ? 'column' : 'row'));
    };

    return (
        <View style={styles.contenedorPrincipal}>
            <View style={styles.panelBotones}>
                <TouchableOpacity style={styles.botonAgregar} onPress={agregarCirculo}>
                    <Text style={styles.textoBoton}>AGREGAR CÍRCULO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonWrap} onPress={alternarWrap}>
                    <Text style={styles.textoBoton}>{tipoWrap}. Pulse para cambiar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonDirection} onPress={alternarDirection}>
                    <Text style={styles.textoBoton}>{tipoDirection}. Pulse para cambiar</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.escenario, { flexWrap: tipoWrap, flexDirection: tipoDirection }]}>
                {circulos.map((item) => (
                    <View
                        key={item.id}
                        style={[styles.circulo, { backgroundColor: item.color }]}
                    >
                        <Text style={styles.textoCirculo}>C {item.id}</Text>
                    </View>
                ))}
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
    panelBotones: {
        gap: 6,
        marginBottom: 12,
    },
    botonAgregar: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonWrap: {
        backgroundColor: '#9e2a2b',
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    botonDirection: {
        backgroundColor: '#fca311',
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
        gap: 10,
    },
    circulo: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        borderWidth: 2,
        borderColor: '#555555',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCirculo: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 13,
    },
});*/

/*import { useState } from 'react';
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

export default function PrincipalScreen() {
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
});*/

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

export default function PrincipalScreen() {
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
                <View style={styles.cajaImagen}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/images/react-logo.png')}
                        style={styles.imagen}
                    />
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
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
});*/

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

const IMAGENES_LOCALES = [
    require('../../assets/images/icon.png'),
    require('../../assets/images/react-logo.png'),
];

export default function PrincipalScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('flex-end');
    const [indiceImagen, setIndiceImagen] = useState<number>(0);

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    const alternarImagenLocal = () => {
        setIndiceImagen((prev) => (prev + 1) % IMAGENES_LOCALES.length);
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

            <TouchableOpacity style={styles.botonSecundario} onPress={alternarImagenLocal}>
                <Text style={styles.textoBoton}>CAMBIAR IMAGEN LOCAL</Text>
            </TouchableOpacity>

            <View
                style={[
                    styles.escenario,
                    { justifyContent: justifyActual, alignItems: alignActual },
                ]}
            >
                <View style={styles.cajaImagen}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={IMAGENES_LOCALES[indiceImagen]}
                        style={styles.imagen}
                    />
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
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonSecundario: {
        backgroundColor: '#9e2a2b',
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 12,
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
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
});*/

// Práctica 9. Distribución, alineación e imágenes

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

export default function PrincipalScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('center');

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
                placeholder="center, space-around, space-between..."
                value={textoInput}
                onChangeText={manejarCambioTexto}
                autoCapitalize="none"
            />

            <View style={styles.panelBotones}>
                <TouchableOpacity
                    style={[styles.boton, alignActual === 'stretch' && styles.botonActivo]}
                    onPress={() => setAlignActual('stretch')}
                >
                    <Text style={styles.textoBoton}>STRETCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'center' && styles.botonActivo]}
                    onPress={() => setAlignActual('center')}
                >
                    <Text style={styles.textoBoton}>CENTER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-start' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-start')}
                >
                    <Text style={styles.textoBoton}>FLEX-START</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-end' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-end')}
                >
                    <Text style={styles.textoBoton}>FLEX-END</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.panelEstado}>
                <Text style={styles.textoEstado}>
                    justifyContent: {justifyActual}  |  alignItems: {alignActual}
                </Text>
            </View>

            <View
                style={[
                    styles.escenario,
                    {
                        flexWrap: 'nowrap',
                        justifyContent: justifyActual,
                        alignItems: alignActual,
                    },
                ]}
            >
                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/images/react-logo.png')}
                        style={styles.imagen}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.imagen}
                    />
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
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonActivo: {
        backgroundColor: '#0d47a1',
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    panelEstado: {
        backgroundColor: '#444444',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoEstado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
    },
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
});*/

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

const imagenes = [
    { nombre: 'estrella', source: require('../../assets/estrella.png') },
    { nombre: 'gato', source: require('../../assets/gato.jpeg') },
];

export default function PrincipalScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('center');
    const [indice, setIndice] = useState<number>(0);

    const elegida = imagenes[indice];

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    const cambiarImagen = () => {
        setIndice((prev) => (prev + 1) % imagenes.length);
    };

    return (
        <View style={styles.contenedorPrincipal}>
            <TextInput
                style={styles.input}
                placeholder="center, space-around, space-between..."
                value={textoInput}
                onChangeText={manejarCambioTexto}
                autoCapitalize="none"
            />

            <View style={styles.panelBotones}>
                <TouchableOpacity
                    style={[styles.boton, alignActual === 'stretch' && styles.botonActivo]}
                    onPress={() => setAlignActual('stretch')}
                >
                    <Text style={styles.textoBoton}>STRETCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'center' && styles.botonActivo]}
                    onPress={() => setAlignActual('center')}
                >
                    <Text style={styles.textoBoton}>CENTER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-start' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-start')}
                >
                    <Text style={styles.textoBoton}>FLEX-START</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-end' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-end')}
                >
                    <Text style={styles.textoBoton}>FLEX-END</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botonCambiarImagen} onPress={cambiarImagen}>
                <Text style={styles.textoBoton}>
                    CAMBIAR IMAGEN ({elegida.nombre})
                </Text>
            </TouchableOpacity>

            <View style={styles.panelEstado}>
                <Text style={styles.textoEstado}>
                    justifyContent: {justifyActual} | alignItems: {alignActual}
                </Text>
            </View>

            <View
                style={[
                    styles.escenario,
                    {
                        flexWrap: 'nowrap',
                        justifyContent: justifyActual,
                        alignItems: alignActual,
                    },
                ]}
            >
                <View style={styles.cajaImagen}>
                    <Image
                        source={elegida.source}
                        style={styles.imagenSecundaria}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.imagenSecundaria}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/estrella.png')}
                        style={styles.imagenSecundaria}
                    />
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
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonActivo: {
        backgroundColor: '#0d47a1',
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    botonCambiarImagen: {
        backgroundColor: '#9e2a2b',
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 8,
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    panelEstado: {
        backgroundColor: '#444444',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoEstado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
    },
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenSecundaria: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});*/

//9.1

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const imagenes = [
    { nombre: 'estrella', source: require('../../assets/estrella.png') },
    { nombre: 'gato', source: require('../../assets/gato.jpeg') },
    { nombre: 'react', source: require('../../assets/images/react-logo.png') },
    { nombre: 'icono', source: require('../../assets/images/icon.png') },
];

export default function PrincipalScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('center');
    const [indice, setIndice] = useState<number>(0);

    const elegida = imagenes[indice];

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    const cambiarImagen = () => {
        setIndice((prev) => (prev + 1) % imagenes.length);
    };

    const elegirImagenAleatoria = () => {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        setIndice(indiceAleatorio);
    };

    return (
        <SafeAreaView style={styles.areaSegura}>
            <View style={styles.contenedorPrincipal}>
                <TextInput
                    style={styles.input}
                    placeholder="center, space-around, space-between..."
                    value={textoInput}
                    onChangeText={manejarCambioTexto}
                    autoCapitalize="none"
                />

                <View style={styles.panelBotones}>
                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'stretch' && styles.botonActivo]}
                        onPress={() => setAlignActual('stretch')}
                    >
                        <Text style={styles.textoBoton}>STRETCH</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'center' && styles.botonActivo]}
                        onPress={() => setAlignActual('center')}
                    >
                        <Text style={styles.textoBoton}>CENTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'flex-start' && styles.botonActivo]}
                        onPress={() => setAlignActual('flex-start')}
                    >
                        <Text style={styles.textoBoton}>FLEX-START</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'flex-end' && styles.botonActivo]}
                        onPress={() => setAlignActual('flex-end')}
                    >
                        <Text style={styles.textoBoton}>FLEX-END</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.panelBotones}>
                    <TouchableOpacity style={styles.botonCambiarImagen} onPress={cambiarImagen}>
                        <Text style={styles.textoBoton}>
                            SIGUIENTE ({elegida.nombre})
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botonAleatorio} onPress={elegirImagenAleatoria}>
                        <Text style={styles.textoBoton}>
                            IMAGEN ALEATORIA
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.panelEstado}>
                    <Text style={styles.textoEstado}>
                        justifyContent: {justifyActual} | alignItems: {alignActual}
                    </Text>
                </View>

                <View
                    style={[
                        styles.escenario,
                        {
                            flexWrap: 'nowrap',
                            justifyContent: justifyActual,
                            alignItems: alignActual,
                        },
                    ]}
                >
                    <View style={styles.cajaImagen}>
                        <Image
                            source={elegida.source}
                            style={styles.imagenSecundaria}
                        />
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                            style={styles.imagenSecundaria}
                        />
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image
                            source={require('../../assets/estrella.png')}
                            style={styles.imagenSecundaria}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaSegura: {
        flex: 1,
        backgroundColor: '#a39f9f',
    },
    contenedorPrincipal: {
        flex: 1,
        paddingTop: 12,
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
        gap: 6,
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonActivo: {
        backgroundColor: '#0d47a1',
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    botonCambiarImagen: {
        flex: 1,
        backgroundColor: '#9e2a2b',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonAleatorio: {
        flex: 1,
        backgroundColor: '#2e7d32',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    panelEstado: {
        backgroundColor: '#444444',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoEstado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
    },
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenSecundaria: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
});*/

/*import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const imagenes = [
    { nombre: 'estrella', source: require('../../assets/estrella.png') },
    { nombre: 'gato', source: require('../../assets/gato.jpeg') },
    { nombre: 'react', source: require('../../assets/images/react-logo.png') },
    { nombre: 'icono', source: require('../../assets/images/icon.png') },
];

export default function PrincipalScreen() {
    const [textoInput, setTextoInput] = useState<string>('center');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('center');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('center');
    const [indice, setIndice] = useState<number>(0);

    const elegida = imagenes[indice];

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    const cambiarImagen = () => {
        setIndice((prev) => (prev + 1) % imagenes.length);
    };

    const elegirImagenAleatoria = () => {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        setIndice(indiceAleatorio);
    };

    return (
        <SafeAreaView style={styles.areaSegura}>
            <View style={styles.contenedorPrincipal}>
                <TextInput
                    style={styles.input}
                    placeholder="center, space-around, space-between..."
                    value={textoInput}
                    onChangeText={manejarCambioTexto}
                    autoCapitalize="none"
                />

                <View style={styles.panelBotones}>
                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'stretch' && styles.botonActivo]}
                        onPress={() => setAlignActual('stretch')}
                    >
                        <Text style={styles.textoBoton}>STRETCH</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'center' && styles.botonActivo]}
                        onPress={() => setAlignActual('center')}
                    >
                        <Text style={styles.textoBoton}>CENTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'flex-start' && styles.botonActivo]}
                        onPress={() => setAlignActual('flex-start')}
                    >
                        <Text style={styles.textoBoton}>FLEX-START</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, alignActual === 'flex-end' && styles.botonActivo]}
                        onPress={() => setAlignActual('flex-end')}
                    >
                        <Text style={styles.textoBoton}>FLEX-END</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.panelBotones}>
                    <TouchableOpacity style={styles.botonCambiarImagen} onPress={cambiarImagen}>
                        <Text style={styles.textoBoton} numberOfLines={1} adjustsFontSizeToFit>
                            SIGUIENTE ({elegida.nombre})
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botonAleatorio} onPress={elegirImagenAleatoria}>
                        <Text style={styles.textoBoton} numberOfLines={1} adjustsFontSizeToFit>
                            IMAGEN ALEATORIA
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.panelEstado}>
                    <Text style={styles.textoEstado} numberOfLines={1} adjustsFontSizeToFit>
                        justifyContent: {justifyActual} | alignItems: {alignActual} | alignContent: space-around
                    </Text>
                </View>

                <View
                    style={[
                        styles.escenario,
                        {
                            flexWrap: 'wrap',
                            justifyContent: justifyActual,
                            alignItems: alignActual,
                            alignContent: 'space-around',
                            rowGap: 16,
                            columnGap: 20,
                        },
                    ]}
                >
                    <View style={styles.etiquetaFlotante}>
                        <Text style={styles.textoEtiqueta}>Modo Wrap</Text>
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image source={elegida.source} style={styles.imagenSecundaria} />
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image
                            source={require('../../assets/images/react-logo.png')}
                            style={styles.imagenSecundaria}
                        />
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image
                            source={require('../../assets/estrella.png')}
                            style={styles.imagenSecundaria}
                        />
                    </View>

                    <View style={styles.cajaImagen}>
                        <Image
                            source={require('../../assets/gato.jpeg')}
                            style={styles.imagenSecundaria}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaSegura: {
        flex: 1,
        backgroundColor: '#a39f9f',
    },
    contenedorPrincipal: {
        flex: 1,
        paddingTop: 12,
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
        gap: 6,
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonActivo: {
        backgroundColor: '#0d47a1',
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    botonCambiarImagen: {
        flex: 1,
        backgroundColor: '#9e2a2b',
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonAleatorio: {
        flex: 1,
        backgroundColor: '#2e7d32',
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 4,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    panelEstado: {
        backgroundColor: '#444444',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoEstado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    escenario: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#cfcbcb',
        padding: 15,
        position: 'relative',
    },
    etiquetaFlotante: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        zIndex: 1,
    },
    textoEtiqueta: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenSecundaria: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
});*/



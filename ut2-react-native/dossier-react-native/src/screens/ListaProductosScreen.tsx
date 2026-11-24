import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

type Producto = {
    nombre: string;
    precio: number;
    stock: number;
};

const productos: Producto[] = [
    { nombre: 'Teclado Mecánico', precio: 59.99, stock: 15 },
    { nombre: 'Ratón Inalámbrico', precio: 24.50, stock: 30 },
    { nombre: 'Monitor 24"', precio: 149.00, stock: 8 },
    { nombre: 'Auriculares Bluetooth', precio: 39.95, stock: 22 },
    { nombre: 'Alfombrilla XL', precio: 14.99, stock: 45 },
    { nombre: 'Webcam HD', precio: 45.00, stock: 12 },
    { nombre: 'Micrófono USB', precio: 65.00, stock: 5 },
    { nombre: 'Soporte Portátil', precio: 19.90, stock: 18 },
];

export default function ListasScreen() {
    return (
        <View style={styles.contenedor}>
            <FlatList
                data={productos}
                renderItem={({ item, index }) => (
                    <View
                        style={[
                            styles.itemProducto,
                            {
                                backgroundColor:
                                    index % 2 === 0 ? '#e3f2fd' : '#f5f5f5',
                            },
                        ]}
                    >
                        <Text style={styles.nombre}>{item.nombre}</Text>
                        <Text style={styles.texto}>Precio: {item.precio} €</Text>
                        <Text style={styles.texto}>Stock: {item.stock} uds.</Text>
                    </View>
                )}
                keyExtractor={(item, index) => item.nombre + index}
                ListHeaderComponent={() => (
                    <Text style={styles.titulo}>Lista Productos</Text>
                )}
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
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    itemProducto: {
        padding: 12,
        marginBottom: 6,
        borderRadius: 6,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
    },
});
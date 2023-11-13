import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormularioSelect = ({ selectedCategoria, onValueChange }) => {
    const [categoria, setCategoria] = useState('');

    const handleCategoriaChange = (selectedCategoria) => {
        setCategoria(selectedCategoria);
        onValueChange(selectedCategoria);
    };

    return (
        <View style={styles.container}>
            <Picker
                style={styles.select}
                selectedValue={categoria}
                onValueChange={handleCategoriaChange}
            >
                <Picker.Item label="Selecione a categoria" value="" />
                <Picker.Item label="Carne" value="Carne" />
                <Picker.Item label="Verdura" value="Verdura" />
                <Picker.Item label="Legumes" value="Legumes" />
                <Picker.Item label="Bebida" value="Bebida" />
                <Picker.Item label="Fruta" value="Fruta" />
                <Picker.Item label="Frios" value="Frios" />
                <Picker.Item label="Padaria" value="Padaria" />
                <Picker.Item label="Enlatado" value="Enlatado" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100px',
        marginBottom: '5px',
        marginTop: '50px',
        width: '90%',
        borderBottomWidth: 1,
    },
    select: {
        height: 60,
        width: '100%',
        color: '#000',
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: '20px',

    }
});

export default FormularioSelect;

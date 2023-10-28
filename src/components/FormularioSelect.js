import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';

const FormularioSelect = ({ selectedQuantidade, onValueChange }) => {
    const [quantidade, setQuantidade] = useState('');

    const handleQuantidadeChange = (selectedQuantidade) => {
        setQuantidade(selectedQuantidade);
    };

    return (
        <View style={styles.container}>
            <Picker
                style={styles.select}
                selectedValue={selectedQuantidade}
                onValueChange={onValueChange}
            >
                <Picker.Item label="Selecione a categoria" value="" />
                <Picker.Item label="Carne" value="Carne" />
                <Picker.Item label="Fruta" value="Fruta" />
                <Picker.Item label="Legumes" value="Legumes" />
                <Picker.Item label="Verdura" value="Verdura" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        marginBottom: '5px',
        marginTop: '5px',
        width: '90%',
        borderBottomWidth: 1
    },
    select: {
        height: 60,
        width: '100%',
        // borderRadius: 30,
        // backgroundColor: '#FED9B7',
        color: '#B5B5B5',
        paddingHorizontal: 15,
        marginBottom: 15,
        // borderColor: '#FED9B7',

    },
});

export default FormularioSelect;

import React from "react";

import { View } from "react-native";

// navegacao
import { useNavigation } from "@react-navigation/native";



const ListaProduto = () => {

    const navigation = useNavigation();

    return (
        <View>
            lista de produtos
        </View>

    )
}

export default ListaProduto;
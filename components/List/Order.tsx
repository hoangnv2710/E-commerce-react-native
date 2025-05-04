
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import OrderItem from './OrderItem';

interface IProps {
    data: CartItem[]
}

export default function Order(props: IProps) {
    const { data } = props;
    return (
        <View style={{ paddingVertical: 5 }}>
            <FlatList data={data}
                scrollEnabled={false}
                renderItem={({ item }) =>
                    <OrderItem name={item.product.name} price={item.product.price} imageUrl={item.product.imageUrl} quantity={item.quantity} />
                }
                keyExtractor={(item) => item.product._id} />
        </View>

    )
}




import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import OrderItem from './OrderItem';



type item = {
    productID: string,
    name: string,
    price: string,
    image: number,
    quantity: number,
}
interface IProps {
    data: item[]
}

export default function Order(props: IProps) {
    const { data } = props;
    return (
        <View style={{ paddingVertical: 5 }}>
            <FlatList data={data}
                scrollEnabled={false}
                renderItem={({ item }) =>
                    <OrderItem name={item.name} price={item.price} image={item.image} quantity={item.quantity} />
                }
                keyExtractor={(item) => item.productID} />
        </View>

    )
}



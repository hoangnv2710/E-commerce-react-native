import CustomBtn from "@/components/custom/Button.Custom";
import { APP_COLOR } from "@/utils/constant";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getProductById } from "@/api/product.api";
import { useAuth } from "@/context/AuthContext";
import { addToCart } from "@/api/user.api";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const { user } = useAuth();
    const { fetchCart } = useCart();

    const productId = Array.isArray(id) ? id[0] : id;
    const [detail, setDetail] = useState<any>(null);
    // const{ fe}.fetchCart(user._id);

    useEffect(() => {
        if (!productId) return;
        const fetchData = async () => {
            const data = await getProductById(productId);
            setDetail(data);
        }
        fetchData();
    }, [productId])

    const handleAddToCart = async () => {
        const result = await addToCart(user._id, productId, 1);
        fetchCart(user._id);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {detail?.imageUrl ? (<>
                <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: detail.imageUrl }}
                            style={styles.image} />

                        <View style={styles.infoContainer}>
                            <Text style={styles.price}>{detail.price.toLocaleString()} VND</Text>
                            <Text style={styles.name}>{detail.name}</Text>


                            <Text style={styles.description} >Description</Text>
                            <Text>{detail.description} </Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.checkout}>
                    <View style={styles.totalContainer}>
                        {/* <Text style={styles.total}>Total </Text> */}
                        <Text style={styles.totalPrice}> {detail.price.toLocaleString()} VND</Text>
                    </View>
                    <View style={styles.checkoutBtn}>
                        <CustomBtn title=" Add to cart"
                            onPress={handleAddToCart}
                            btnStyle={{

                                padding: 8,
                                borderWidth: 0,
                                backgroundColor: APP_COLOR.DARK_BLUE
                            }}
                            textStyle={{
                                color: "#fff",
                                fontSize: 18
                            }}
                            icon={<FontAwesome name="shopping-cart" size={24} color="#fff" />} />
                    </View>
                </View>
            </>) :
                (<Text style={{ flex: 1, textAlign: "center", fontSize: 30, paddingTop: 300, color: "#fff" }}>Loading...</Text>)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        overflow: "hidden",
        flex: 1,
        marginTop: 20,
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
    },
    infoContainer: {
        width: "100%",
        paddingHorizontal: 10,
        justifyContent: "flex-start",
    },
    name: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 5,
        paddingBottom: 5,
    },
    price: {
        color: APP_COLOR.DARK_BLUE,
        marginTop: 10,
        fontWeight: "500",
        fontSize: 20,

    },
    description: {
        fontSize: 17,
        fontWeight: "bold",
        paddingTop: 5,
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: "#ccc"
    },
    checkout: {
        height: 60,
        flexDirection: "row",
        elevation: 10,
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
    },
    totalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: "bold",
        color: APP_COLOR.DARK_BLUE
    },
    total: {
        fontSize: 26,
        fontWeight: "500",

    },
    checkoutBtn: {
        flex: 1, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20
    },
});
const ex = {
    id: "1", name: "Điện thoại iphone 14", price: "20,000,000", image: require("@/assets/icons/phone.jpg"),
    description: `
iPhone 14 128GB là phiên bản được rất nhiều người dùng yêu thích bởi sở hữu mức giá “dễ thở" nhất. Dòng máy cũng có nhiều cải tiến về chất lượng camera và hiệu năng xử lý. Chi tiết về đặc điểm nổi bật của iPhone 14 128GB bạn hãy theo dõi trong nội dung dưới đây. 

 - Dung lượng 128GB: Lưu trữ lên đến 35.000 bức ảnh chất lượng cao 

 - Camera: Cảm biến 12MP cho phép cải thiện 49% khả năng chụp thiếu sáng

 - Hiệu năng: Xử lý tốc độ, mượt mà với chipset A15 Bionic, CPU 6 lõi và GPU 5 lõi

 - SIM: Lần đầu loại bỏ khe sim vật lý và chỉ có eSIM tại Mỹ

 - Tính năng mới: Khả năng chống va đập đỉnh cao cùng kết nối vệ tinh trong tình huống khẩn cấp


 LƯU Ý:

- Khách hàng vui lòng quay video khui hộp để đảm bảo quyền lợi về bảo hành, đổi trả sản phẩm. Chú ý riêng với trường hợp máy có lỗi hình thức ngoài như trầy xước, bụi cam,… Quý khách vui lòng KHÔNG ACTIVE MÁY

- Sản phẩm bảo hành 12 THÁNG tại trung tâm bảo hành chính hãng Apple trên toàn quốc. 

- ShopDunk hỗ trợ bảo hành theo số imei,  tiếp nhận gửi bảo hành sản phẩm tại tất cả chi nhánh ShopDunk đang kinh doanh trên toàn quốc. Không hỗ trợ Quý khách hàng trả lại sản phẩm khi đã bóc tem niêm phong gói hàng, bóc seal sản phẩm, đã qua sử dụng và đã ACTIVE.

- Hỗ trợ xuất hóa đơn VAT (Quý khách vui lòng chat với bộ phận CSKH của ShopDunk để cung cấp thông tin xuất hóa đơn trong vòng 2 ngày kể từ khi đặt hàng. Ngoài thời gian này, shop rất tiếc không thể hỗ trợ). Các trường hợp quý khách cung cấp thông tin không chính xác, shop không hỗ trợ xuất/ chỉnh sửa theo yêu cầu nếu hoá đơn đã được xuất trước đó.
  ` }

import CustomBtn from "@/components/custom/Button.Custom";
import CustomInput from "@/components/custom/Input.Custom";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { registerUser, updateUser, uploadAvatar } from "@/api/user.api";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToastAndroid } from 'react-native';
import { useAuth } from "@/context/AuthContext";
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from "expo-image-picker";

export default function AccountDetail() {
    const { user, setUser } = useAuth();
    const [email, setEmail] = useState<string>(user.email);
    const [password, setPassword] = useState<string>(user.password);
    const [name, setName] = useState<string>(user.name);
    const [number, setNumber] = useState<string>(user.phone);
    const [address, setAddress] = useState<string>(user.address);
    const [imageUpload, setImageUpload] = useState<any>(null)
    const [imageUri, setImageUri] = useState<string>(user.imageUrl);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            setImageUpload(result.assets[0])
        }
    }

    useEffect(() => {
        const uploadImage = async () => {
            if (imageUpload) {
                const formData = new FormData();
                formData.append("image", {
                    uri: imageUri,
                    name: imageUpload.fileName,
                    type: imageUpload.mimeType,
                } as any);
                console.log(":::", {
                    uri: imageUri,
                    name: imageUpload.fileName,
                    type: imageUpload.mimeType
                })
                const res = await uploadAvatar(formData);
                console.log(">>>>", res)
                setImageUri(res);
            };
        }
        uploadImage();
        console.log(imageUpload)
    }, [imageUpload])


    const handleSave = async () => {
        try {
            const result = await updateUser(user._id, name, email, password, number, address, imageUri);
            setUser(result);
            router.replace('/(tabs)/account');
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.title}>Account Detail</Text>
            <View style={styles.avatarContainer}>
                {/* {
                    isUpload ?
                        <Image style={styles.avatar}
                            source={{ uri: `${imageUri}` }} />
                        : <Image style={styles.avatar}
                            source={{ uri: `${process.env.EXPO_PUBLIC_SERVER_URL}${imageUri}` }} />

                } */}
                <Image style={styles.avatar}
                    source={imageUpload ? { uri: `${imageUpload.uri}` }
                        : { uri: `${process.env.EXPO_PUBLIC_SERVER_URL}${imageUri}` }
                    } />

                <CustomBtn onPress={pickImage}
                    btnStyle={{
                        backgroundColor: "transparent",
                        borderWidth: 0,
                    }}
                    title=" Upload avatar"
                    textStyle={
                        {
                            color: APP_COLOR.LIGHT_BLUE,
                            fontSize: 20,
                        }
                    }
                    icon={<Feather name="edit" size={24} color={APP_COLOR.LIGHT_BLUE} />} />
            </View>

            <View style={styles.container}>
                <CustomInput title="Name" value={name} setValue={setName} />
                <CustomInput title="Email" value={email} setValue={setEmail} />
                <CustomInput title="Password" value={password} setValue={setPassword} />
                <CustomInput title="Phone number" value={number} setValue={setNumber} />
                <CustomInput title="Address" value={address} setValue={setAddress} />
                <CustomBtn onPress={() => handleSave()}
                    btnStyle={{
                        marginTop: 30,
                        paddingVertical: 10,
                        width: "100%",
                        backgroundColor: APP_COLOR.DARK_BLUE,
                        borderRadius: 10,
                    }}
                    textStyle={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 18
                    }}
                    title="SAVE" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 15,
        color: "#fff",
        fontSize: 24,
        fontWeight: "500",
        paddingBottom: 15,
    },
    avatarContainer: {
        marginBottom: 15,
        paddingHorizontal: 20,
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: APP_COLOR.MEDIUM_BLUE
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
})
import { Modal, TextInput, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import { useState } from 'react';

export default function AddNewCategoryModal(props: any) {
    const [categoryName, setCategoryName] = useState("");
    const [projection, setProjection] = useState("");

    const handleSave = () => {
        // Implement the logic to save the category
        console.log("Category Name:", categoryName);
        console.log("Projection:", projection);
        props.setModalVisible(false);
    };

    return (
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, styles.shadow]}>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Category Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#bababa"
                                placeholder="Enter Category Name"
                                value={categoryName}
                                onChangeText={setCategoryName}
                            />
                        </View>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Projection:</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#bababa"
                                placeholder="Enter Projection"
                                value={projection}
                                onChangeText={setProjection}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.rowContainer}>
                            <TouchableOpacity
                                style={[styles.shadow, styles.saveButton]}
                                onPress={handleSave}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.shadow, styles.cancelButton]}
                                onPress={() => props.setModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "rgb(35, 45, 62)",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        marginBottom: 5,
    },
    colContainer: {
        flexDirection: "column",
        alignItems: "baseline",
        marginBottom: 10,
    },
    label: {
        color: "white",
        fontSize: 16,
        fontWeight: "light",
        marginBottom: 2,
    },
    input: {
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,0.05)",
        width: "100%",
        borderColor: "#4a4a4a",
        padding: 10,
        borderRadius: 5,
        color: "white",
    },
    saveButton: {
        backgroundColor: "#1D4ED8",
        padding: 10,
        marginVertical: 8,
        width: "45%",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: "#D14343",
        padding: 10,
        marginVertical: 8,
        width: "45%",
        alignItems: "center",
        borderRadius: 8,
    },
    saveButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "normal",
    },
    cancelButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "normal",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

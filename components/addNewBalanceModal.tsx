import { Modal, TextInput, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import moment from 'moment-timezone';
import { FontAwesome } from "@expo/vector-icons";

export default function AddNewBalanceModal(props: any) {
    let today = new Date();
    const [date, setDate] = useState(today);
    const [_date, _setDate] = useState(today);
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        _setDate(selectedDate);
        setShow(false);
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
                            <Text style={styles.label}>Date:</Text>
                            {/* <TextInput style={styles.input} placeholderTextColor="#bababa" placeholder="Date" /> */}
                            <TouchableOpacity
                                style={styles.dateInput}
                                onPress={() => { setShow(true) }}>
                                <Text style={{ color: "#bababa" }}>{moment(_date).format("DD MMMM, YYYY")}</Text>
                                <FontAwesome name="calendar" size={16} color="#bababa" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            {show && (
                                <DateTimePicker
                                    value={date}
                                    mode={'date'}
                                    onChange={onChange}
                                />
                            )}
                        </View>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Income:</Text>
                            <TextInput style={styles.input} placeholderTextColor="#bababa" placeholder="Enter Income Amount" />
                        </View>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Spend:</Text>
                            <TextInput style={styles.input} placeholderTextColor="#bababa" placeholder="Enter Spend Amount" />
                        </View>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Categorey:</Text>
                            <TextInput style={styles.input} placeholderTextColor="#bababa" placeholder="Enter Category" />
                        </View>
                        <View style={styles.colContainer}>
                            <Text style={styles.label}>Remark:</Text>
                            <TextInput style={styles.input} placeholderTextColor="#bababa" placeholder="Enter Cause of Income/Spend" />
                        </View>
                        <View style={styles.rowContainer}>
                            <TouchableOpacity
                                style={[styles.shadow, styles.saveButton]}
                                onPress={() => { props.setModalVisible(false); }}>
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.shadow, styles.cancelButton]}
                                onPress={() => { props.setModalVisible(false); }}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
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
        marginBottom: 5
    },
    colContainer: {
        flexDirection: "column",
        alignItems: "baseline",
        marginBottom: 10
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
        //flex: 1,
    },
    dateInput: {
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,0.05)",
        width: "100%",
        borderColor: "#4a4a4a",
        padding: 10,
        borderRadius: 5,
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        //flex: 1,
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

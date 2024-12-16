import AddNewCategoryModal from "@/components/addNewCategoryModal";
import { loadAllBalances, loadAllBudgets } from "@/models/loads";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Balance {
    date: string;
    income?: number | null;
    spend?: number | null;
    category: string;
    remarks?: string | null;
}

interface Budget {
    category: string;
    projection?: number | null;
    type: 'income' | 'spend';
    created_at: string;
}
export default function Budget() {

    const db = useSQLiteContext();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [balanaceData, setBalanceData] = useState<Balance[]>([]);
    const [budgetData, setBudgetData] = useState<Budget[]>([]);

    useEffect(() => {
        const getData = async () => {
            const balance: Balance[] = await loadAllBalances(db);
            const budget: Budget[] = await loadAllBudgets(db);

            setBalanceData(balance);
            setBudgetData(budget);
        }

    }, []);


    return (
        <SafeAreaView className="bg-slate-800 h-screen">
            <View className="items-center">
                <TouchableOpacity
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }}
                    className="bg-blue-700 p-4 my-2 w-1/2 items-center rounded-md"
                    onPress={() => { setModalVisible(true) }}
                >
                    <Text className="text-white text-xl">+ Add new Category</Text>
                </TouchableOpacity>
                <AddNewCategoryModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

                {/* Showing Balance Data */}
                {balanaceData.map((balance, index) => (
                    <Text key={index}>{balance.category}</Text>
                ))}

            </View>
        </SafeAreaView>
    );
}

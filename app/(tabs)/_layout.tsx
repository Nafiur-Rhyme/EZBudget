import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'rgb(165, 180, 252)',
            tabBarInactiveTintColor: 'rgb(110, 126, 150)',
            tabBarActiveBackgroundColor: 'rgb(55, 70, 90)',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'rgb(35, 45, 62)',
            },
            tabBarStyle: {
                backgroundColor: 'rgb(35, 45, 62)',
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Balance",
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name="dollar" color={color} />,
                }}
            />
            <Tabs.Screen
                name="budget"
                options={{
                    title: "Budget",
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name="tachometer" color={color} />,
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    title: "Analytics",
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name="bar-chart" color={color} />,
                }}
            />
            <Tabs.Screen name="+not-found" options={{}} />
        </Tabs >
    )
}

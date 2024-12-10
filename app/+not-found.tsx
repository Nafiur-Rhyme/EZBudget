import { View, Text } from "react-native"
import { Link, Stack } from "expo-router"

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Opps! Page Not Found" }} />
            <View className="flex flex-1 justify-center items-center bg-slate-800">
                <Text className="font-mono text-base p-3 text-white">I guess nothing to see here!</Text>
                <Link href="/" className="text-xl text-white p-4 bg-indigo-400 rounded-xl">
                    Lets go back home
                </Link>
            </View>
        </>
    )
}

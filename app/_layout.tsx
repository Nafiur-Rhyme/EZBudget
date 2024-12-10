import { StatusBar } from "expo-status-bar";
import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="+not-found"
          options={{}}
        />
      </Stack>
    </>
  )
}

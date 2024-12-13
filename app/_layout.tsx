import "../global.css";
import { createTables } from "../models/createTables";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="ezbudget.db" onInit={createTables}>
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
    </SQLiteProvider>
  )
}

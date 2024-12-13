import { type SQLiteDatabase } from 'expo-sqlite';

export async function loadAllBudgets(db: SQLiteDatabase): Promise<any> {
    const results = await db.getAllAsync(`SELECT * FROM Budget;`);
    return results;
}

export async function loadAllBalances(db: SQLiteDatabase): Promise<any> {
    const results = await db.getAllAsync(`SELECT * FROM Balance;`);
    return results;
}
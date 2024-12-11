import { type SQLiteDatabase } from 'expo-sqlite';

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

export async function insertBudget(db: SQLiteDatabase, budget: Budget) {
    await db.runAsync(
        `INSERT INTO Budget (category, projection, type, created_at) VALUES (?, ?, ?, ?);`,
        [budget.category, budget.projection ?? null, budget.type, budget.created_at]
    );
}

export async function insertBalance(db: SQLiteDatabase, balance: Balance) {
    await db.runAsync(
        `INSERT INTO Balance (date, income, spend, category, remarks) VALUES (?, ?, ?, ?, ?);`,
        [balance.date, balance.income ?? null, balance.spend ?? null, balance.category, balance.remarks ?? null]
    );
}

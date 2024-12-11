import { type SQLiteDatabase } from 'expo-sqlite';

interface BudgetUpdate {
    id: number;
    category?: string;
    projection?: number | null;
    type?: 'income' | 'spend';
    updated_at?: string;
}

interface BalanceUpdate {
    id: number;
    date?: string;
    income?: number | null;
    spend?: number | null;
    category?: string;
    remarks?: string | null;
}

export async function updateBudget(db: SQLiteDatabase, budget: BudgetUpdate) {
    await db.runAsync(
        `UPDATE Budget 
     SET 
       category = COALESCE(?, category), 
       projection = COALESCE(?, projection), 
       type = COALESCE(?, type), 
       created_at = COALESCE(?, created_at) 
     WHERE id = ?;`,
        [
            budget.category ?? null,
            budget.projection ?? null,
            budget.type ?? null,
            budget.updated_at ?? null,
            budget.id,
        ]
    );
}

export async function updateBalance(db: SQLiteDatabase, balance: BalanceUpdate) {
    await db.runAsync(
        `UPDATE Balance 
     SET 
       date = COALESCE(?, date), 
       income = COALESCE(?, income), 
       spend = COALESCE(?, spend), 
       category = COALESCE(?, category), 
       remarks = COALESCE(?, remarks) 
     WHERE id = ?;`,
        [
            balance.date ?? null,
            balance.income ?? null,
            balance.spend ?? null,
            balance.category ?? null,
            balance.remarks ?? null,
            balance.id,
        ]
    );
}

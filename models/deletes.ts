import { type SQLiteDatabase } from 'expo-sqlite';

export async function deleteBudgetById(db: SQLiteDatabase, id: number) {
    await db.runAsync(
        `DELETE FROM Budget 
     WHERE id = ?;`,
        [id]
    );
}

export async function deleteBalanceById(db: SQLiteDatabase, id: number) {
    await db.runAsync(
        `DELETE FROM Balance 
     WHERE id = ?;`,
        [id]
    );
}

export async function deleteBalanceByCategory(db: SQLiteDatabase, category: string) {
    await db.runAsync(
        `DELETE FROM Balance 
     WHERE category = ?;`,
        [category]
    );
}
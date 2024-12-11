import { type SQLiteDatabase } from 'expo-sqlite';

export async function createTables(db: SQLiteDatabase) {
  console.log('Creating tables if needed');
  // Create Budget and Balance tables 
  await db.execAsync(
    `
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS Budget (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          category TEXT NOT NULL UNIQUE, 
          projection REAL, 
          type TEXT NOT NULL CHECK(type IN ('income', 'spend')), 
          created_at TEXT
        );

    CREATE TABLE IF NOT EXISTS Balance (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          date TEXT NOT NULL, 
          income REAL, 
          spend REAL, 
          category TEXT NOT NULL, 
          remarks TEXT,
          FOREIGN KEY(category) REFERENCES Budget(category) 
          ON DELETE CASCADE ON UPDATE CASCADE
        );`
  );
};

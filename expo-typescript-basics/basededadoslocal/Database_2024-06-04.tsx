import * as SQLite from 'expo-sqlite';

export class Database {
 

  basededados:string = "alarme";

  
  async createTable(table:any=null){

    const db = await SQLite.openDatabaseAsync(this.basededados);
    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS alarme(id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
    INSERT INTO test (value, intValue) VALUES ('test1', 123);
    INSERT INTO test (value, intValue) VALUES ('test2', 456);
    INSERT INTO test (value, intValue) VALUES ('test3', 789);
  `);
  }

  async insertRow(){
    const db = await SQLite.openDatabaseAsync(this.basededados);
    const insertResult = await db.runAsync('INSERT INTO alarme (value, intValue) VALUES (?, ?)', '++|Ultimoaaa', 100);
  }

  async select(table:any){
    const db = await SQLite.openDatabaseAsync(this.basededados);
    const allRows = await db.getAllAsync(`SELECT * FROM ${table}`);
    return allRows;
  }
} 


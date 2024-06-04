import * as SQLite from 'expo-sqlite';

export class Database {


  basededados: string = "";

  constructor(){
    this.open();
  }

  open(){
    const db = SQLite.openDatabaseSync(this.basededados);
    return db;
  }


  fecharBase(data:string) {
    const db = this.open();
    db.closeSync();
  }

  deletarBase(data:string) {
    const db = SQLite.deleteDatabaseSync(data);
  }

  createTable(table: any = null, colunas: object) {

    const colunasTexto = Object.entries(colunas)
    .map(([name, type]) => `${name} ${type}`)
    .join(', ');
    
    
    const db = this.open();
    db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS ${table} (${colunasTexto});

  `);
  }

  async insertRow(table: any = null,dados:object) {

    const keys = Object.keys(dados).join(', ');
    const placeholders = Object.keys(dados)
      .map(() => '?')
      .join(', ');

    const valores = Object.values(dados);

    const db = this.open();
    const insertResult = await db.runAsync(`INSERT INTO ${table}(${keys}) VALUES (${placeholders})`,valores);
  }

  async select(table: any, extra: string = "") {
    const db = this.open();
    const allRows = await db.getAllAsync(`SELECT * FROM ${table} ${extra}`);
    console.log(allRows);
    return allRows;
  }
}


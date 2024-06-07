import { Database } from './Database';

const db = new Database();

  const colunas = {
    id: 'INTEGER PRIMARY KEY NOT NULL',
    data: 'DATE NOT NULL',
    hora: 'TIME NOT NULL',
    status: 'TEXT NOT NULL'
  };


db.createTable("configuraalarme",colunas);
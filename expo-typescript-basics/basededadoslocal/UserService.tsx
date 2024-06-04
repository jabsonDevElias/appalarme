import Database from './Database';

import { SQLiteDatabase } from 'react-native-sqlite-storage';

export interface User {
  id?: number;
  name: string;
  age: number;
}

class UserService {
  private db: SQLiteDatabase | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    this.db = await Database.open();
    await Database.createTable();
  }

  public async insertUser(name: string, age: number): Promise<void> {
    if (!this.db) {
      await this.init();
    }
    await this.db!.executeSql(
      'INSERT INTO users (name, age) VALUES (?, ?);',
      [name, age]
    );
  }

  public async getUsers(): Promise<User[]> {
    if (!this.db) {
      await this.init();
    }
    const [results] = await this.db!.executeSql('SELECT * FROM users;');
    const users: User[] = [];
    for (let i = 0; i < results.rows.length; i++) {
      users.push(results.rows.item(i));
    }
    return users;
  }

  public async updateUser(id: number, name: string, age: number): Promise<void> {
    if (!this.db) {
      await this.init();
    }
    await this.db!.executeSql(
      'UPDATE users SET name = ?, age = ? WHERE id = ?;',
      [name, age, id]
    );
  }

  public async deleteUser(id: number): Promise<void> {
    if (!this.db) {
      await this.init();
    }
    await this.db!.executeSql('DELETE FROM users WHERE id = ?;', [id]);
  }
}

export default new UserService();

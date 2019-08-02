import { RowDataPacket } from 'mysql';
import { IEmployee } from '@entities';

import { logger } from '../../shared/Logger';
import connection from '../../Connection';

export interface IEmployeeDao {
  getAll: () => Promise<IEmployee[]>;
  checkIn: (employeeID: number, datetime: Date) => Promise<void>;
  getCheckIns: () => Promise<number>;
}

export class EmployeeDao implements IEmployeeDao {

  public async getAll(): Promise<IEmployee[]> {
    try {
      const [rows, _fields] = await connection.execute(`
                SELECT id, name, url
                FROM employee
            `);

      const response: IEmployee[] = [];
      if (rows) {
        rows.map((element: RowDataPacket) => {
          response.push({ id: element.id, name: element.name, url: element.url });
        });
      }
      return response;
    }
    catch (e) {
      logger.error(e);
      throw new Error(e);
    }
  }

  public async checkIn(employeeID: number): Promise<void> {
    try {
      const currentDate = new Date();
      await connection.execute(`
                INSERT INTO log(e_id, checkin, checkin_date, checkin_time)
                VALUES(?, ?, ?, ?)
            `, [employeeID, currentDate, currentDate, currentDate]);
    }
    catch (e) {
      logger.error(e);
      throw new Error(e);
    }
  }

  public async getCheckIns(): Promise<number> {
    try {
      const [rows, _fields] = await connection.execute(`
                SELECT COUNT(*) as total
                FROM log
            `);

      return rows[0].total;
    }
    catch (e) {
      logger.error(e);
      throw new Error(e);
    }
  }
}

import mysql from 'mysql2/promise';

import * as config from './config.json';

const connection = mysql.createPool(config.db);

export default connection;

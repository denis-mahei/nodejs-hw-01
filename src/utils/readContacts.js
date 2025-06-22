import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data.toString());
  } catch (e) {
    console.log('Error reading file:', e);
  }
};

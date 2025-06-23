import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updateContacts = [...contacts, newContact];
    await writeContacts(updateContacts);
  } catch (e) {
    console.log(e);
  }
};

addOneContact();

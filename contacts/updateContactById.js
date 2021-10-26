const getAllContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, data) => {
  const contacts = await getAllContacts();
  console.log(data);
  const idx = contacts.findIndex((contact) => contact.id === id);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id, ...data };
  await updateContacts(contacts);
};

module.exports = updateContactById;

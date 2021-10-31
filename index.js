const contactsOperation = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAllContacts":
      const allContact = await contactsOperation.getAllContacts();
      console.table(allContact);
      return allContact;
    case "getContactById":
      const getContact = await contactsOperation.getContactById(id);
      console.table(getContact);
      return getContact;
    case "addContact":
      const newContact = await contactsOperation.addContact(data);
      console.table(newContact);
      return newContact;
    case "updateContactById":
      const updateContact = await contactsOperation.updateContactById(id, data);
      console.table(updateContact);
      return updateContact;
    case "removeContact":
      const removedContact = await contactsOperation.removedContact(id);
      console.table(removedContact);
      return removedContact;
    default:
      throw new Error("Unknown action");
  }
};

(async () => {
  await invokeAction(argv);
})();

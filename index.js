const fs = require("fs").promises;
const contactsOperation = require("./contacts");

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

const newData = {
  name: " Mango",
  email: "mango@gmail.com",
  phone: "322-22-22",
};

const updateId = 1;

// invokeAction({ action: "getAllContacts" });
// invokeAction({ action: "getContactById", id: 5 });
// invokeAction({ action: "addContact", data: newData });

invokeAction({
  action: "updateContactById",
  data: newData,
  id: updateId,
});

// invokeAction({
//   action: "removeContact",
//   id: 3,
// });

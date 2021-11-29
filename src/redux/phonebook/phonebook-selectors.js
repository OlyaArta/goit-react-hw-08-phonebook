export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  console.log(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) => {
    console.log(contact.name);
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};

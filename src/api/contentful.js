export const init = () =>
  contentful.createClient({
    space: "fm69pggybjik",
    accessToken: "86ZP4e_5JYBXFr8CB44Yxje1SWnXJND-kkYobVhHzcU"
  });

export const getEntryById = id => {
  init()
    .getEntry(id)
    .then(entry => {
      return entry;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getAllEntries = (contentTypeId, order) =>
  init()
    .getEntries({ content_type: contentTypeId, order: order })
    .then(entries => {
      return entries.items;
    })
    .catch(err => {
      console.log(err.message);
    });

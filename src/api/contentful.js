export const init = () => {
  return contentful.createClient({
    space: "fm69pggybjik",
    accessToken: "86ZP4e_5JYBXFr8CB44Yxje1SWnXJND-kkYobVhHzcU"
  });
};

export const getEntryById = async id => {
  await init()
    .getEntry(id)
    .then(entry => {
      console.log(entry);
      return entry;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getFilteredSyningar = query =>
  init()
    .getEntries(query)
    .then(entries => {
      return entries.items;
    })
    .catch(err => {
      console.log(err.message);
    });

export const sync = () =>
  init()
    .sync({ initial: true })
    .then(resp => {
      console.log(resp);
    });

export const getAllListamenn = () =>
  init()
    .getEntries({ content_type: "artist" })
    .then(resp => {
      return resp.items;
    })
    .catch(err => {
      console.log(err.message);
    });
export const getAllSyningar = () =>
  init()
    .getEntries({ content_type: "exhibition" })
    .then(resp => {
      return resp.items;
    })
    .catch(err => {
      console.log(err.message);
    });
export const getAllSyningarStadir = () =>
  init()
    .getEntries({ content_type: "stadir" })
    .then(resp => {
      return resp.items;
    })
    .catch(err => {
      console.log(err.message);
    });

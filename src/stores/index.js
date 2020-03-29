import { writable } from "svelte/store";

export const syningar = writable([]);
export const listamenn = writable([]);
export const syningarstadir = writable([]);

// filtered sýningar
const opnar = writable([]);
const opnaBradum = writable([]);
const afstadnar = writable([]);

export const filteredSyningar = [
  { syningar: opnar, filter: "opnar" },
  { syningar: opnaBradum, filter: "opna bráðum" },
  { syningar: afstadnar, filter: "afstaðnar" }
];

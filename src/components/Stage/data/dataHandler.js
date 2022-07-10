import bodies from "./bodies.json";
import objects from "./objects.json";

import { nanoid } from "nanoid";

const localStorageItems = {
  objectsAll: "puppetObjects",
  bodiesArr: "puppetBodies",
  tmpObj: "puppetTemporaryObjects",
};

export const getBodiesArr = () => JSON.parse(getBodies());

const getObjectDataById = (id) => JSON.parse(getObjects())?.[id] || null;

export const getObjectBodyInitialData = () => ({
  ...objects.initialBody,
  id: nanoid(),
});

export function setTemporaryBody(body) {
  const { tmpObj } = localStorageItems;
  localStorage.setItem(tmpObj, JSON.stringify({ [body.id]: body }));
}
function getTemporaryObjectDataById(id) {
  return getAllTemporary()[id];
}
export function getData(id, temporary) {
  console.log("getData(id)");
  return temporary ? getTemporaryObjectDataById(id) : getObjectDataById(id);
}

export function clearTemporaryObjectsData() {
  const { tmpObj } = localStorageItems;
  localStorage.removeItem(tmpObj);
}

function getAllTemporary() {
  const { tmpObj } = localStorageItems;
  let result = localStorage.getItem(tmpObj);
  if (result) return JSON.parse(result);
}

function getObjects() {
  const { objectsAll } = localStorageItems;
  let result = localStorage.getItem(objectsAll);
  if (result) return result;

  localStorage.setItem(objectsAll, JSON.stringify(objects));
  return localStorage.getItem(objectsAll);
}
function getBodies() {
  const { bodiesArr } = localStorageItems;
  let result = localStorage.getItem(bodiesArr);
  if (result) return result;
  localStorage.setItem(bodiesArr, JSON.stringify(bodies));
  return localStorage.getItem(bodiesArr);
}

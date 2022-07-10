import bodies from "./bodies.json";
import objects from "./objects.json";

const localStorageItems = {
  objectsAll: "puppetObjects",
  bodiesArr: "puppetBodies",
};

export function getBodiesArr() {
  return JSON.parse(getBodies());
}

export function getObjectDataById(id) {
  return JSON.parse(getObjects())?.[id] || null;
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

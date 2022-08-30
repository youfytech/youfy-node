const ObjectManager = require('../../../sdk/ObjectManager');
const Database = require('../../../api/Database');

module.exports = async context => {
  const objectManager = new ObjectManager(context);
  const parcelDb = await Database('parcels');
  const data = await parcelDb.all();

  const workObjects = [];

  for (const obj of data) {
    const workObject = await objectManager.create(obj);
    workObjects.push(workObject);
  }

  return workObjects;
};

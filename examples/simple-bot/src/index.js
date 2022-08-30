const Performer = require('../../../sdk/Performer');
const ObjectManager = require('../../../sdk/ObjectManager');
// // const ValidationError = require('../../../exceptions/ValidationError');

const sleep = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds));
};

module.exports = async context => {
  console.log('starting');

  const { msg } = context;
  await msg.warn('Aqui fica um aviso de teste');

  const objectManager = new ObjectManager(context);
  const performer = new Performer(context);

  const work_objects = await objectManager.bulkCreate([{ name: 'test' }]);

  await performer.forEach(async work_object => {
    await work_object.update({ updated_at: new Date() });
    throw new Error('test');
    // await sleep(343433);
  }, work_objects);

  const all_objects = await objectManager.fetchAll();
  console.log(all_objects);
};

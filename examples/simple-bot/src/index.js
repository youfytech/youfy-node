const Performer = require('../../../sdk/Performer');
const ObjectManager = require('../../../sdk/ObjectManager');
const { ValidationError } = require('../../../exceptions');

module.exports = async context => {
  const { msg } = context;
  await msg.warn('Aqui fica um aviso de teste');

  const objectManager = new ObjectManager(context);
  const performer = new Performer(context, { retries: 0 });

  const work_objects = await objectManager.bulkCreate([{ name: 'Clark' }, { name: 'Bruce' }, { name: 'Diana' }]);

  await performer.forEach(async work_object => {
    const person = work_object.payload;

    if (person.name === 'Bruce') {
      throw new Error('Erro desconhecido.');
    }

    if (person.name === 'Diana') {
      throw new ValidationError('Erro de validação.');
    }

    await work_object.update({ updated_at: new Date() });
  }, work_objects);
};

const Performer = require('../../../sdk/Performer');
const ObjectManager = require('../../../sdk/ObjectManager');
const axios = require('axios');

module.exports = async context => {
  const objectManager = new ObjectManager(context);
  const performer = new Performer(context);

  const fetchHeroes = async () => {
    const pending = await objectManager.fetchPending();

    if (pending.length) {
      return pending;
    }

    const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    return await objectManager.bulkCreate(response.data);
  };

  const heroes = await fetchHeroes();

  await performer.forEach(async work_object => {
    console.log('Hero:', work_object.payload.name);
    await timer.sleep(1000);
  }, heroes);
};

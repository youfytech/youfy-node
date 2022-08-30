module.exports = async ({ inputData, garbage }) => {
  garbage.onClean(() => console.log('cleaned'));
  const time = parseInt(inputData.get('time', 5000));

  console.log('processing...', time);
  await timer.sleep(time);
  console.log('processed');

  const option = inputData.get('option', '1') + '';
  console.log('option', option);

  const crash = () =>
    new Promise(async () => {
      await teste(); // gerando erro que crasha o processo
    });

  switch (option) {
    case '1':
      throw new Error('Falha!');
    case '2':
      process.exit(0);
    case '3':
      await crash();
      break;

    default:
      console.log('OK');
      break;
  }

  console.log('Done!');
};

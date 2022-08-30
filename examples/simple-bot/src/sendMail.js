const Mailer = require('../../../sdk/Mailer');

module.exports = async (context, parcels) => {
  context.messenger.send('Enviando email com os dados...');
  const parcels_html = parcels.map(parcel => `<li><b>${parcel.code}</b>: ${parcel.status} - ${parcel.local}</li>`);

  const mailer = new Mailer();
  await mailer.send({
    html: `<p>Olá, segue os dados das encomendas: </p><p><ul>${parcels_html.join('')}</ul>`,
    to: 'alan@youfy.com.br',
    subject: 'Encomendas',
  });
};

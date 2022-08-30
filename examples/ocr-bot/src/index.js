const OCR = require('../../../sdk/OCR');

module.exports = async context => {
  const data = await OCR.readPDF('/Volumes/data/alan/Desktop/nf.pdf');
  console.log(data);

  // const data2 = await OCR.readPDF('/Volumes/data/alan/Desktop/nf2.pdf');
  // console.log(data2);
};

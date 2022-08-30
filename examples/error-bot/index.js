const pkg = require('./package.json');
const setup = require('../../engine/setup')(pkg);

const bot = require('./src');
setup(bot);

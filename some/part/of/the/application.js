
// this works , no issues, but is ugly as hell.
const routeIndex = require('../../../../routes/index');

const prefix = '../../../..';

// does not resolve (command+hover or command + click, Ctrl+space autocomplete)
const routeIndex2 = require(`${prefix}/routes/index`);

// also does not resolve (command+hover or command + click, Ctrl+space autocomplete)
const routeIndex3 = require(prefix + '/routes/index');

// also does not resolve.
const routeIndexVia__dirname = require(__dirname + '../../../routes/index');

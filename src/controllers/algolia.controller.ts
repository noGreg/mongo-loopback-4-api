
// For the default version
import algoliasearch from 'algoliasearch';

const client = algoliasearch('ROVU84YKT8', '1c452b867771d9b275775455f4a6382f');
const index = client.initIndex('ab_default');

export default index;

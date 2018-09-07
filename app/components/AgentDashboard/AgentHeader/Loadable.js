/**
 *
 * Asynchronously loads the component for AgentHeader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

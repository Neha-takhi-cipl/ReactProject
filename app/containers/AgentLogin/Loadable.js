/**
 *
 * Asynchronously loads the component for AgentLogin
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

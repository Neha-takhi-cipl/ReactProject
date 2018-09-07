/**
 *
 * Asynchronously loads the component for AgentInfo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

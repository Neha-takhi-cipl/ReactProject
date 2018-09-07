/**
 *
 * Asynchronously loads the component for AgentInfoList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

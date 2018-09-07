/**
 *
 * Asynchronously loads the component for TripdashboardTab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for ItiActivities
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

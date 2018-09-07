/**
 *
 * Asynchronously loads the component for TripDate
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

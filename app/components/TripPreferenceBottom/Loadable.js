/**
 *
 * Asynchronously loads the component for TripPreferenceBottom
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

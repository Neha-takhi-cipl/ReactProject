/**
 *
 * Asynchronously loads the component for TripDbheader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

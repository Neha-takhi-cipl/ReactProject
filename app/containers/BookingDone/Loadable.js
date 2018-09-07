/**
 *
 * Asynchronously loads the component for BookingDone
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for EditTripName
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

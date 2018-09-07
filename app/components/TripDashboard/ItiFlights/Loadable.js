/**
 *
 * Asynchronously loads the component for ItiFlights
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

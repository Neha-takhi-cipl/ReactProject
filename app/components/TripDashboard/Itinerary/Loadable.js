/**
 *
 * Asynchronously loads the component for Itinerary
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

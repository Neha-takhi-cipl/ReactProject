/**
 *
 * Asynchronously loads the component for TripChecklist
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

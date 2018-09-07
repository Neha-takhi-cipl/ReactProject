/**
 *
 * Asynchronously loads the component for AddTraveler
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for FindTravelerstep2
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

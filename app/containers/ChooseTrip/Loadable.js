/**
 *
 * Asynchronously loads the component for ChooseTrip
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

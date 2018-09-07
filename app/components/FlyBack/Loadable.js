/**
 *
 * Asynchronously loads the component for FlyBack
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for UserPopup
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

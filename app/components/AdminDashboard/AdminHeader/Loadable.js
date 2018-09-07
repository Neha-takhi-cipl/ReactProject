/**
 *
 * Asynchronously loads the component for AdminHeader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

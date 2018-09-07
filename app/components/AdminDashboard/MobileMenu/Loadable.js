/**
 *
 * Asynchronously loads the component for MobileMenu
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for AdminEditProfile
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

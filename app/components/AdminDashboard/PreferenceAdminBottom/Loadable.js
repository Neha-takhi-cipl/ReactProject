/**
 *
 * Asynchronously loads the component for PreferenceAdminBottom
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

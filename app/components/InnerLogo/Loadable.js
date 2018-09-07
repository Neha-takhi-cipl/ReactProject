/**
 *
 * Asynchronously loads the component for InnerLogo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

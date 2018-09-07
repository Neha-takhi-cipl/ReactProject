/**
 *
 * Asynchronously loads the component for HomeButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

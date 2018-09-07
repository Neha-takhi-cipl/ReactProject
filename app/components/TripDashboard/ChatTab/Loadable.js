/**
 *
 * Asynchronously loads the component for ChatTab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

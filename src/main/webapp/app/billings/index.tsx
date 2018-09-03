import React from 'react';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import BillingManagement from 'app/billings/billing-management/index';

/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`${match.url}/billing-management`} component={BillingManagement} />
  </div>
);

export default Routes;

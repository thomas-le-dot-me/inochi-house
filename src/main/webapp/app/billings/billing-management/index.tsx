import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import BillingManagement from 'app/billings/billing-management/billing-management';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={match.url} component={BillingManagement} />
    </Switch>
  </>
);

export default Routes;

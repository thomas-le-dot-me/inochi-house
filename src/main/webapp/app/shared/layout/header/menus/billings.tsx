import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from 'app/shared/layout/header/header-components';

const billingMenuItems = (
  <>
    <DropdownItem tag={Link} to="/billings/electricity">
      <FontAwesomeIcon icon="tasks" /> <Translate contentKey="global.menu.billings.electricity">Electric city</Translate>
    </DropdownItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

export const BillingsMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.billings.main')} id="billing-menu">
    {billingMenuItems}
    {/* jhipster-needle-add-billing-to-menu - JHipster will add billings to the menu here */}
  </NavDropdown>
);

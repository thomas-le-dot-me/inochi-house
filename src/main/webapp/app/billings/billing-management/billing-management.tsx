import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table, Row, Badge } from 'reactstrap';
import {
  Translate,
  ICrudGetAllAction,
  ICrudPutAction,
  TextFormat,
  JhiPagination,
  getPaginationItemsNumber,
  getSortState,
  IPaginationBaseState
} from 'react-jhipster';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { IRootState } from 'app/shared/reducers';

export interface IUserManagementProps extends StateProps, RouteComponentProps<{}> {}

export class UserManagement extends React.Component<IUserManagementProps, IPaginationBaseState> {
 
 

  render() {
    const { users, account, match, totalItems } = this.props;
    return (
      <div>
        Hello from the other side!       
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  users: storeState.userManagement.users,
  totalItems: storeState.userManagement.totalItems,
  account: storeState.authentication.account
});

//const mapDispatchToProps = { getUsers, updateUser };

type StateProps = ReturnType<typeof mapStateToProps>;
//type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(UserManagement);

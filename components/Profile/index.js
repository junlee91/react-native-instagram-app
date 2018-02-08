import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(userActions.logout());
    },
    getOwnProfile: () => {
      dispatch(userActions.getOwnProfile());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);

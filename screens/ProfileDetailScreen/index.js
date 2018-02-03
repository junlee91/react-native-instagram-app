import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: username => {
      return dispatch(userAction.getProfile(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);

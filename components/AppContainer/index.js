import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      // getFeed
      dispatch(getFeed());
      // getSearch
      // getNotifications
      // getProfile
    }
  }
}

export default connect(mapStateToProps)(AppContainer);

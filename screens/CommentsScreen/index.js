import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { photos: { feed: { comments} } } = state;
    return {
      comments
    };
  };

export default connect(mapStateToProps)(Container);
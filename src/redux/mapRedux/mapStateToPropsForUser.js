// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToPropsForUser = state => ({
    user: state.user,
});

export default mapStateToPropsForUser;

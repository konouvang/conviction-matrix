// Instead of taking everything from state, we just want the user and loginMode
// to determine which page we should show the user
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });
const mapStateToPropsForUserLoginMode = (state) => {
    return {
        user: state.user,
        loginMode: state.loginMode,
    }
};

export default mapStateToPropsForUserLoginMode;
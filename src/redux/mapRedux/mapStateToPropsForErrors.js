// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToPropsForErrors = state => ({
    errors: state.errors,
});

export default mapStateToPropsForErrors;

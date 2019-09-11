/**
 * Maps the redux state to a property of 'store' on the component 'props'
 * property.
 * @param {object} state - redux state object, with all reducer properties
 */
const mapStateToProps = state => ({
    store: state,
});

export default mapStateToProps;

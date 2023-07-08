export default (state, updates) => {
    return {
        ...state,
        positions: {
            ...state.positions,
            ...updates
        }
    };
};

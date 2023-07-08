export default (state) => {
    return {
        ...state,
        ...{
            gameOver: false,
            positions: {
                player1: 0,
                player2: 0
            }
        }
    };
};

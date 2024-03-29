export const createGame = (firstPlayer) => {
    let winner
    let started = false

    const move = (player) => {
        if (!started && player !== firstPlayer) {
            return -1
        }
        const pos = player.move()
        if (!winner && player.finished) winner = player
        return pos
    }

    return {
        move,
        get winner() {
            return winner
        },
    }
}

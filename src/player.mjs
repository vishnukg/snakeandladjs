export const create_player = () => {
    let position = 0
    let finished = false

    const moveOne = () => {
        position++
        if (position === 100) finished = true
        return position
    }

    const move = (n = 1) => {
        for (let i = 0; i < n; i++) {
            moveOne()
        }
        return position
    }

    return {
        move,
        get finished() {
            return finished
        },
    }
}

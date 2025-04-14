const prefabs = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    [[0, 0, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]    
];

/*
class PoissonDiskSampler {
    constructor(gridWidth, gridHeight, cellSize = 5, buffer = 50) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.cellSize = cellSize;
        this.k = 50; // retries before sampling termination
        this.samples = [];
        this.grid = Array(gridWidth * gridHeight).fill(null);
        this.occupied = new Set(); // Tracks occupied grid cells
        this.buffer = buffer; // This allows us to spawn samples beyond the grid width
    }

    getPrefabRadius(prefab) {
        const w = prefab[0].length;
        const h = prefab.length;
        return Math.sqrt(w * w + h * h) / 2;
    }

    sample() {
        let initialPoint = null;
        let tries = 0;
        const maxTries = 100;
    
        while (tries < maxTries && !initialPoint) {
            const prefab = this.randomPrefab();
            const position = {
                x: Math.floor(Math.random() * (this.gridWidth + this.buffer * 2)) - this.buffer, // Allow for offscreen positions
                y: Math.floor(Math.random() * this.gridHeight)
            };
            if (this.isValid(position, prefab)) {
                initialPoint = { position, prefab };
            }
            tries++;
        }
    
        if (!initialPoint) {
            console.warn('Poisson sampler failed to place initial sample.');
            return;
        }
    
        this.samples.push(initialPoint);
        this.grid[this.getGridIndex(initialPoint.position)] = initialPoint;
        this.markOccupied(initialPoint);
    
        const activeList = [initialPoint];

        while (activeList.length > 0) {
            let found = false;
            const idx = Math.floor(Math.random() * activeList.length);
            const current = activeList[idx];
            const { x, y } = current.position;

            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const prefab = this.randomPrefab();
                const currentRadius = this.getPrefabRadius(current.prefab);
                const newRadius = this.getPrefabRadius(prefab);
                const baseDistance = currentRadius + newRadius + 2;
                const dist = Math.floor(baseDistance + Math.random() * baseDistance);
                const newX = x + Math.round(dist * Math.cos(angle));
                const newY = y + Math.round(dist * Math.sin(angle));
                const newPosition = { x: newX, y: newY };
                const padding = Math.floor(Math.random() * (25 - 10) + 10);

                if (this.isValid(newPosition, prefab, padding)) {
                    const newSample = { position: newPosition, prefab };
                    this.samples.push(newSample);
                    activeList.push(newSample);
                    this.grid[this.getGridIndex(newPosition)] = newSample;
                    this.markOccupied(newSample);
                    found = true;
                    break;
                }
            }

            if (!found) activeList.splice(idx, 1);
        }
    }

    isValid(center, prefab, padding = 0) {
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);
        
        // Prevent clouds from spawning offscreen entirely or overlapping others
        for (let row = -padding; row < prefab.length + padding; row++) {
            for (let col = -padding; col < prefab[0].length + padding; col++) {
                const gridX = center.x + col - halfW;
                const gridY = center.y + row - halfH;

                // Ensure the entire prefab fits within the grid, allowing offscreen on the left and right edges
                if (gridX < -this.buffer || gridY < 0 || gridX >= this.gridWidth + this.buffer || gridY >= this.gridHeight) return false;

                // Check for overlap with existing samples in occupied grid cells
                const key = `${gridX},${gridY}`;
                if (this.occupied.has(key)) return false;

                // Check for overlap with nearby clouds by bounding boxes
                for (let sample of this.samples) {
                    const sampleBox = this.getBoundingBox(sample.position, sample.prefab);
                    const newBox = this.getBoundingBox(center, prefab);

                    if (this.isOverlap(sampleBox, newBox)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    getBoundingBox(position, prefab) {
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);

        return {
            x1: position.x - halfW,
            x2: position.x + halfW,
            y1: position.y - halfH,
            y2: position.y + halfH
        };
    }

    isOverlap(box1, box2) {
        // Check if two bounding boxes overlap
        return !(box1.x2 < box2.x1 || box1.x1 > box2.x2 || box1.y2 < box2.y1 || box1.y1 > box2.y2);
    }

    markOccupied({ position, prefab }) {
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);

        for (let row = 0; row < prefab.length; row++) {
            for (let col = 0; col < prefab[row].length; col++) {
                if (prefab[row][col] === 0) continue;

                const gridX = position.x + col - halfW;
                const gridY = position.y + row - halfH;

                this.occupied.add(`${gridX},${gridY}`);
            }
        }
    }

    getGridIndex({ x, y }) {
        return y * this.gridWidth + x;
    }

    gridDistance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    randomPrefab = () => prefabs[Math.floor(Math.random() * prefabs.length)];

    draw(context) {
        for (const { position, prefab } of this.samples) {
            context.fillStyle = 'rgba(25, 25, 25)';

            for (let row = 0; row < prefab.length; row++) {
                for (let col = 0; col < prefab[row].length; col++) {
                    if (prefab[row][col] === 1) {
                        context.fillRect(
                            (position.x + col - Math.floor(prefab[0].length / 2)) * this.cellSize,
                            (position.y + row - Math.floor(prefab.length / 2)) * this.cellSize,
                            this.cellSize,
                            this.cellSize
                        );
                    }
                }
            }
        }
    }
};
*/

/*
class CloudScroller {
    constructor(sampler, scrollSpeed = 1) {
        this.sampler = sampler;  // Instance of PoissonDiskSampler
        this.scrollSpeed = scrollSpeed;  // Number of grid cells to scroll per second
        this.lastUpdate = 0;  // Timestamp of the last update
    }

    update(time) {
        // Only update once per second
        if (time - this.lastUpdate >= 1000) {
            this.lastUpdate = time;

            // Scroll the samples in the x-direction (rightward)
            for (let sample of this.sampler.samples) {
                sample.position.x += this.scrollSpeed;

                // Check if the sample has gone off the grid (based on prefab's bounding box)
                // Assuming each cloud has a `width` property (bounding box width)
                if (sample.position.x >= this.sampler.gridWidth + sample.prefab.width) {
                    // Reposition the cloud offscreen on the left based on its width
                    sample.position.x = -sample.prefab.width;
                }
            }
        }
    }

    draw(context) {
        // Draw the samples in their updated positions
        this.sampler.draw(context);
    }
};
*/

/*
class Rain {
    drops = [];
    raindropLengthMin = 5;
    raindropLengthMax = 15;
    raindropOpacityEnd = 0.1;
    raindropOpacityStart = 0.8;
    lastStepTime = 0; // controls movement step
    stepInterval = 100; // 1 second in ms

    constructor(cellSize) {
        this.cellSize = cellSize;
    }

    createRaindrop = () => {
        const length = Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin) + this.raindropLengthMin);

        return {
            x: Math.floor(Math.random() * (window.innerWidth / this.cellSize)),
            y: -length, // start *above* the grid
            length: length,
        };
    }


    updateRaindropMovement = (drop) => {
        drop.y += 1; // Move one grid unit downward
    }

    drawLineUsingGrid = (start, end, context) => {
        let x1 = start[0], y1 = start[1];
        let x2 = end[0], y2 = end[1];

        let dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1, sy = y1 < y2 ? 1 : -1;
        let p = dx - dy;

        while (true) {
            let distance = y1 - start[1];
            let opacity = this.raindropOpacityEnd + (distance / (end[1] - start[1])) * (this.raindropOpacityStart - this.raindropOpacityEnd);
            context.fillStyle = `rgba(25, 25, 25, ${opacity})`;
            context.fillRect(x1 * this.cellSize, y1 * this.cellSize, this.cellSize, this.cellSize);

            if (x1 === x2 && y1 === y2) break;
            let e2 = 2 * p;
            if (e2 > -dy) { p -= dy; x1 += sx; }
            if (e2 < dx) { p += dx; y1 += sy; }
        }
    }

    update = (context, cellSize, timestamp) => {
        // Only move drops if one second has passed
        if (!this.lastStepTime) {
            this.lastStepTime = timestamp;
        }

        if (timestamp - this.lastStepTime >= this.stepInterval) {
            // Add new raindrop occasionally
            if (Math.random() < 0.3) {
                this.drops.push(this.createRaindrop());
            }

            // Move drops down
            for (let drop of this.drops) {
                this.updateRaindropMovement(drop);
            }

            this.lastStepTime = timestamp;
        }

        // Draw raindrops (even if not moving this frame)
        for (let i = this.drops.length - 1; i >= 0; i--) {
            let drop = this.drops[i];
            let endY = drop.y + drop.length;
            this.drawLineUsingGrid([drop.x, drop.y], [drop.x, endY], context);

            if (drop.y > Math.floor(window.innerHeight / cellSize)) {
                this.drops.splice(i, 1);
            }
        }
    }
};
*/

/*
class PoissonDiskSampler {
    constructor(gridWidth, gridHeight, cellSize = 5, buffer = 50) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.cellSize = cellSize;
        this.k = 50;
        this.samples = [];
        this.grid = Array(gridWidth * gridHeight).fill(null);
        this.occupied = new Set();
        this.buffer = buffer;
        this.lastUpdateTime = 0;
    }

    getPrefabRadius(prefab) {
        const w = prefab[0].length;
        const h = prefab.length;
        return Math.sqrt(w * w + h * h) / 2;
    }

    sample() {
        const getInitialPosition = () => ({
            x: Math.floor(Math.random() * (this.gridWidth + this.buffer * 2)) - this.buffer,
            y: Math.floor(Math.random() * this.gridHeight)
        });

        this.sampleFromInitialPoint(getInitialPosition, x => x >= 0);
    }

    sampleOffscreenLeft() {
        const getInitialPosition = () => {
            // Calculate the max width of the prefab (including padding)
            const prefab = this.randomPrefab();
            const prefabWidth = prefab[0].length + this.buffer * 2; // include padding in width
    
            // Ensure the entire prefab with padding fits within the buffer on the left side
            const xPos = -Math.floor(Math.random() * prefabWidth); // place it offscreen, left
            const yPos = Math.floor(Math.random() * this.gridHeight); // any vertical position
    
            return { x: xPos, y: yPos };
        };
    
        this.sampleFromInitialPoint(getInitialPosition, x => x < 0);
    }

    sampleFromInitialPoint(getInitialPosition, xCondition) {
        let initialPoint = null;
        let tries = 0;
        const maxTries = 50;
    
        while (tries < maxTries && !initialPoint) {
            const prefab = this.randomPrefab();
            const position = getInitialPosition();
            const padding = 5; // apply padding when checking validity

            if (this.isValid(position, prefab, padding)) {
                initialPoint = { position, prefab };
            }

            tries++;
        }
    
        if (!initialPoint) {
            return;
        }
    
        this.samples.push(initialPoint);
        const idx = this.getGridIndex(initialPoint.position);
        if (idx !== null) this.grid[idx] = initialPoint;
        this.markOccupied(initialPoint);
    
        const activeList = [initialPoint];
    
        while (activeList.length > 0) {
            let found = false;
            const idx = Math.floor(Math.random() * activeList.length);
            const current = activeList[idx];
            const { x, y } = current.position;
    
            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const prefab = this.randomPrefab();
                const currentRadius = this.getPrefabRadius(current.prefab);
                const newRadius = this.getPrefabRadius(prefab);
                const baseDistance = currentRadius + newRadius + 2;
                const dist = Math.floor(baseDistance + Math.random() * baseDistance);
                const newX = x + Math.round(dist * Math.cos(angle));
                const newY = y + Math.round(dist * Math.sin(angle));
                const newPosition = { x: newX, y: newY };
                const padding = Math.floor(Math.random() * (25 - 10) + 10);
    
                if (xCondition(newX) && this.isValid(newPosition, prefab, padding)) {
                    const newSample = { position: newPosition, prefab };
                    this.samples.push(newSample);
                    activeList.push(newSample);
                    const idx = this.getGridIndex(newPosition);
                    if (idx !== null) this.grid[idx] = newSample;
                    this.markOccupied(newSample);
                    found = true;
                    break;
                }
            }
    
            if (!found) activeList.splice(idx, 1);
        }
    }

    isValid(center, prefab, padding = 0) {
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);

        for (let row = -padding; row < prefab.length + padding; row++) {
            for (let col = -padding; col < prefab[0].length + padding; col++) {
                const gridX = center.x + col - halfW;
                const gridY = center.y + row - halfH;

                if (gridX < -this.buffer || gridY < 0 || gridX >= this.gridWidth + this.buffer || gridY >= this.gridHeight)
                    return false;

                const key = `${gridX},${gridY}`;
                if (this.occupied.has(key)) return false;

                for (let sample of this.samples) {
                    const sampleBox = this.getBoundingBox(sample.position, sample.prefab);
                    const newBox = this.getBoundingBox(center, prefab);
                    if (this.isOverlap(sampleBox, newBox)) return false;
                }
            }
        }

        return true;
    }

    getBoundingBox(position, prefab) {
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);

        return {
            x1: position.x - halfW,
            x2: position.x + halfW,
            y1: position.y - halfH,
            y2: position.y + halfH
        };
    }

    isOverlap(box1, box2) {
        return !(box1.x2 < box2.x1 || box1.x1 > box2.x2 || box1.y2 < box2.y1 || box1.y1 > box2.y2);
    }

    markOccupied(sample) {
        const { position, prefab } = sample;
        const halfW = Math.floor(prefab[0].length / 2);
        const halfH = Math.floor(prefab.length / 2);
        sample.occupiedCells = [];

        for (let row = 0; row < prefab.length; row++) {
            for (let col = 0; col < prefab[row].length; col++) {
                if (prefab[row][col] === 0) continue;
                const gridX = position.x + col - halfW;
                const gridY = position.y + row - halfH;
                const key = `${gridX},${gridY}`;
                this.occupied.add(key);
                sample.occupiedCells.push(key);
            }
        }
    }

    unmarkOccupied(sample) {
        if (!sample.occupiedCells) return;
        for (const key of sample.occupiedCells) {
            this.occupied.delete(key);
        }
    }

    getGridIndex({ x, y }) {
        if (x < 0 || x >= this.gridWidth || y < 0 || y >= this.gridHeight) return null;
        return y * this.gridWidth + x;
    }

    gridDistance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    randomPrefab = () => prefabs[Math.floor(Math.random() * prefabs.length)];

    draw(context) {
        for (const { position, prefab } of this.samples) {
            context.fillStyle = 'rgba(25, 25, 25)';
            for (let row = 0; row < prefab.length; row++) {
                for (let col = 0; col < prefab[row].length; col++) {
                    if (prefab[row][col] === 1) {
                        context.fillRect(
                            (position.x + col - Math.floor(prefab[0].length / 2)) * this.cellSize,
                            (position.y + row - Math.floor(prefab.length / 2)) * this.cellSize,
                            this.cellSize,
                            this.cellSize
                        );
                    }
                }
            }
        }
    }

    // Update function to move clouds by 1 grid cell per second
    update(timestamp) {

    }
}
*/

/*
class Clouds {
    constructor(
        viewport,
        cellSize,
        buffer = 50,
    ) {
        this.buffer = buffer;
        this.clouds = [];
        this.lastUpdateTime = 0;
        this.viewport = viewport;
        this.cellSize = cellSize;

        this.sampler = new PoissonDiskSampler(
            Math.floor(this.viewport.width / this.cellSize),
            Math.floor(this.viewport.height / this.cellSize),
            this.cellSize
        );
    }

    // Initialize with some predefined cloud prefabs
    initialize() {
        // Prepare the initial cloud positions
        this.sampler.sample({
            position: {
                x: Math.floor(Math.random() * (this.viewport.width + this.buffer * 2)) - this.buffer,
                y: Math.floor(Math.random() * this.viewport.height)
            }
        });

        this.clouds = this.sampler.samples.map(sample => {
            const prefab = this.randomPrefab();

            return { position: sample.position, prefab };
        });
    }

    // Update cloud movement and resample if necessary
    update(timestamp) {
        const deltaTime = timestamp - this.lastUpdateTime;
        
        if (deltaTime >= 1000) { // 1 second update
            this.lastUpdateTime = timestamp;

            const newClouds = [];

            // Move each cloud
            for (const cloud of this.clouds) {
                cloud.position.x += 1; // Move right by 1 cell
                
                const prefabWidth = cloud.prefab[0].length;

                // If cloud is off the screen, resample it
                if (cloud.position.x > this.viewport.width + prefabWidth) {
                    this.sampler.unmarkOccupied(cloud);

                    cloud.position = this.getOffscreenPosition();

                    this.sampler.sampleFromInitialPoint(cloud.position);
                }

                newClouds.push(cloud);
            }

            // Replace the old clouds with the updated ones
            this.clouds = newClouds;
        }
    }

    getOffscreenPosition() {
        return {
            x: -Math.floor(Math.random() * (this.viewport.width + this.buffer * 2)),
            y: Math.floor(Math.random() * this.gridHeight)
        };
    }

    // Randomly select a cloud prefab (cloud shape)
    randomPrefab() {
        return prefabs[Math.floor(Math.random() * prefabs.length)];
    }

    // Draw clouds on the context
    draw(context) {
        for (const cloud of this.clouds) {
            const { position, prefab } = cloud;
            context.fillStyle = 'rgba(25, 25, 25)';
            for (let row = 0; row < prefab.length; row++) {
                for (let col = 0; col < prefab[row].length; col++) {
                    if (prefab[row][col] === 1) {
                        context.fillRect(
                            (position.x + col - Math.floor(prefab[0].length / 2)) * this.poissonSampler.cellSize,
                            (position.y + row - Math.floor(prefab.length / 2)) * this.poissonSampler.cellSize,
                            this.poissonSampler.cellSize,
                            this.poissonSampler.cellSize
                        );
                    }
                }
            }
        }
    }
}
*/

/*
class PoissonDiskSampler {
    constructor(gridWidth, gridHeight, cellSize = 5, buffer = 50, radius = 10) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.cellSize = cellSize;
        this.k = 50;
        this.samples = [];
        this.grid = Array(gridWidth * gridHeight).fill(null);
        this.occupied = new Set();
        this.buffer = buffer;
        this.radius = radius; // radius in grid cell units
    }

    sample(initial) {
        return this.sampleFromInitialPoint(initial);
    }

    sampleFromInitialPoint(initial) {
        let initialPoint = null;
        let tries = 0;
        const maxTries = 50;
        const newSamples = [];

        while (tries < maxTries && !initialPoint) {
            if (this.isValid(initial.position)) {
                initialPoint = { position: { ...initial.position } };
            }
            tries++;
        }

        if (!initialPoint) return [];

        this.samples.push(initialPoint);
        newSamples.push(initialPoint);
        const idx = this.getGridIndex(initialPoint.position);
        if (idx !== null) this.grid[idx] = initialPoint;
        this.markOccupied(initialPoint);

        const activeList = [initialPoint];

        while (activeList.length > 0) {
            let found = false;
            const idx = Math.floor(Math.random() * activeList.length);
            const current = activeList[idx];
            const { x, y } = current.position;

            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const dist = Math.random() * this.radius + this.radius;
                const newX = x + Math.round(dist * Math.cos(angle));
                const newY = y + Math.round(dist * Math.sin(angle));
                const newPosition = { x: newX, y: newY };

                if (this.isValid(newPosition)) {
                    const newSample = { position: newPosition };
                    this.samples.push(newSample);
                    newSamples.push(newSample);
                    activeList.push(newSample);
                    const gridIdx = this.getGridIndex(newPosition);
                    if (gridIdx !== null) this.grid[gridIdx] = newSample;
                    this.markOccupied(newSample);
                    found = true;
                    break;
                }
            }

            if (!found) activeList.splice(idx, 1);
        }

        return newSamples;
    }

    isValid(center) {
        const { x: gridX, y: gridY } = center;

        if (gridX < -this.buffer || gridY < 0 || gridX >= this.gridWidth + this.buffer || gridY >= this.gridHeight)
            return false;

        const key = `${gridX},${gridY}`;
        if (this.occupied.has(key)) return false;

        // Check surrounding cells within radius
        for (let yOffset = -this.radius; yOffset <= this.radius; yOffset++) {
            for (let xOffset = -this.radius; xOffset <= this.radius; xOffset++) {
                const neighborX = gridX + xOffset;
                const neighborY = gridY + yOffset;

                if (neighborX < 0 || neighborX >= this.gridWidth || neighborY < 0 || neighborY >= this.gridHeight) {
                    continue;
                }

                const distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
                if (distance < this.radius) {
                    if (this.occupied.has(`${neighborX},${neighborY}`)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    markOccupied(sample) {
        const { position } = sample;
        const key = `${position.x},${position.y}`;
        this.occupied.add(key);
    }

    getGridIndex({ x, y }) {
        if (x < 0 || x >= this.gridWidth || y < 0 || y >= this.gridHeight) return null;
        return y * this.gridWidth + x;
    }

    reset() {
        this.samples = [];
        this.occupied.clear();
        this.grid.fill(null);
    }
}
*/

/*
class PoissonDiskSampler {
    constructor(gridWidth, gridHeight, radius = 10, k = 30) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.radius = radius;
        this.k = k;
        this.samples = [];
        this.occupied = new Set();  // To track occupied cells
    }

    isValid = (x, y, samples = []) => {
        if (x < 0 || y < 0 || x >= this.gridWidth || y >= this.gridHeight) return false;

        // Check if the position is already occupied
        if (this.occupied.has(`${x},${y}`)) return false;

        for (const p of samples) {
            const dx = p.x - x;
            const dy = p.y - y;

            if (Math.sqrt(dx * dx + dy * dy) < this.radius) return false;
        }

        return true;
    };

    sample(initial) {
        const samples = [];
        const activeList = [];

        if (!this.isValid(initial.position.x, initial.position.y, samples)) return [];

        samples.push(initial.position);
        this.occupied.add(`${initial.position.x},${initial.position.y}`); // Mark the initial position as occupied

        activeList.push(initial.position);

        while (activeList.length > 0) {
            const idx = Math.floor(Math.random() * activeList.length);
            const point = activeList[idx];
            let found = false;

            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const dist = this.radius + Math.random() * this.radius;
                const x = Math.round(point.x + dist * Math.cos(angle));
                const y = Math.round(point.y + dist * Math.sin(angle));

                if (this.isValid(x, y, samples)) {
                    const newPoint = { x, y };
                    samples.push(newPoint);
                    activeList.push(newPoint);
                    this.occupied.add(`${x},${y}`); // Mark new point as occupied
                    found = true;
                    break;
                }
            }

            if (!found) {
                activeList.splice(idx, 1);
            }
        }

        this.samples = samples;
        return samples;
    }
}
*/

/*
class Rain {
    drops = [];
    raindropLengthMin = 5;
    raindropLengthMax = 15;
    raindropOpacityEnd = 0.1;
    raindropOpacityStart = 0.8;
    lastStepTime = 0;
    stepInterval = 250; // Time interval for updates (ms)
    speed = 5; // Grid cells per second

    constructor(viewport, context, cellSize) {
        this.viewport = viewport;
        this.cellSize = cellSize;
        this.context = context;

        this.sampler = new PoissonDiskSampler(
            Math.floor(this.viewport.width / this.cellSize),
            Math.floor(this.viewport.height / this.cellSize),
            20,
            30
        );

        // Initial drop sampling
        this.sampler.sample({
            position: {
                x: Math.floor(Math.random() * this.sampler.gridWidth),
                y: Math.floor(Math.random() * this.sampler.gridHeight)
            }
        });

        // Initialize drops
        this.drops = this.sampler.samples.map(position => ({
            position,
            length: Math.floor(Math.random() * (this.raindropLengthMax - this.raindropLengthMin + 1)) + this.raindropLengthMin
        }));
    }

    update = (timestamp) => {
        if (!this.lastStepTime) {
            this.lastStepTime = timestamp;
        }

        if (timestamp - this.lastStepTime >= this.stepInterval) {
            this.drops.forEach(drop => {
                drop.position.y += 1;
            });

            this.lastStepTime = timestamp;
        }
    }

    draw = () => {
        this.drops.forEach(({ position, length }) => {
            this.context.fillStyle = "white";

            this.context.fillRect(
                position.x * this.cellSize,
                position.y * this.cellSize,
                this.cellSize,
                this.cellSize
            );

        });
    }
}
*/

/*
class PoissonDiskSampler {
    constructor(
        columns,
        rows,
        radius = 10,
        cellSize = 5,
        k = 30
    ) {
        this.columns = columns;
        this.rows = rows;
        this.radius = radius;
        this.k = k;
        this.cellSize = cellSize;
        this.width = this.columns * this.cellSize;
        this.height = this.rows * this.cellSize;
    
        this.grid = Array.from({ length: this.columns }, () => Array(this.rows).fill(null));

        console.log("DEBUG::radius", radius);

        this.samples = [];
    }

    getCellCoords(x, y) {
        return {
            column: Math.floor(x / this.cellSize),
            row: Math.floor(y / this.cellSize)
        };
    }

    snapToGrid(x, y) {
        const { column, row } = this.getCellCoords(x, y);

        const snappedX = column * this.cellSize;
        const snappedY = row * this.cellSize;

        return {
            x: snappedX,
            y: snappedY
        };
    }

    isValid(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
    
        const { column, row } = this.getCellCoords(x, y);

        console.log("DEBUG::x", x);
        console.log("DEBUG::y", y);
        console.log("DEBUG::this.grid", this.grid);
        // console.log("DEBUG::this.grid[y]", this.grid[y + 1]);
        // console.log("DEBUG::this.grid[x][y]", this.grid[x][y]);

        let location = null

        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[row].length; column++) {
                if (this.grid[row][column] !== null) {
                    console.log("DEBUG::this.grid[row][column]", row);

                    location = { row, column };
                }
            }
        }

        console.log("DEBUG::location", location);

        // for (let i = 0; i <= this.radius; i++) {
        // }

        // console.log("DEBUG::this.grid", JSON.stringify(this.grid));

        // for (let i = -this.radius; i <= this.radius; i++) {
        //     for (let j = -this.radius; j <= this.radius; j++) {
        //         const nc = column + i;
        //         const nr = row + j;

        //         console.log("DEBUG::nc", nc);
        //         console.log("DEBUG::nr", nr);

        //         // return false;

        //         // const nc = column + i;
        //         // const nr = row + j;
    
        //         // // Skip if outside grid boundaries
        //         // if (nc < 0 || nr < 0 || nc >= this.columns || nr >= this.rows) continue;
    
        //         // const neighbor = this.grid[nc][nr];
    
        //         // // Check the neighbor if there is one
        //         // if (neighbor) {
        //         //     const dx = neighbor.x - x;
        //         //     const dy = neighbor.y - y;
    
        //         //     // Ensure the distance between points is at least the radius in grid cells
        //         //     if (dx * dx + dy * dy < this.cellSize * this.cellSize) {
        //         //         return false; // Too close, invalid
        //         //     }
        //         // }
        //     }
        // }
    
        return true; // Valid
    }
    
    sample(initial) {
        const samples = [];
        // const activeList = [];
        let activeList = [];
        
        let { x, y } = initial.position;
        
        const snapped = this.snapToGrid(x, y);
       
        if (!this.isValid(snapped.x, snapped.y)) return [];
        
        // Start with the initial point
        samples.push(snapped);
        activeList.push(snapped);
        
        const { column, row } = this.getCellCoords(snapped.x, snapped.y);
        
        console.log("DEBUG::sample::initial::snapped", snapped);


        // Place the sample on the grid
        this.grid[column][row] = snapped;
        
        while (activeList.length > 0) {
            const idx = Math.floor(Math.random() * activeList.length);
            const point = activeList[idx];
        
            let found = false;
        
            // for (let i = 0; i < this.k; i++) {
            for (let i = 0; i < 0; i++) {
                const angle = Math.random() * 2 * Math.PI;
        
                // const distance = this.radius + Math.random() * this.radius;
                const distance = this.radius;
        
                const px = point.x + distance * Math.cos(angle);
                const py = point.y + distance * Math.sin(angle);
        
                const snapped = this.snapToGrid(px, py);
        
                if (this.isValid(snapped.x, snapped.y)) {
                    samples.push(snapped);
                    activeList.push(snapped);
        
                    const { column, row } = this.getCellCoords(snapped.x, snapped.y);
        
                    this.grid[column][row] = snapped;
        
                    found = true;
        
                    break;
                }
            }

            if (!found) {
                activeList.splice(idx, 1);
            }

            // DEBUG
            activeList = []
        }
        
        this.samples = samples;
        
        return samples;
    }
}
*/

// NOTE : GOOD STATE
/*
class PoissonDiskSampler {
    constructor(columns, rows, radius = 2, k = 30) {
        this.columns = columns;
        this.rows = rows;
        this.radius = radius; // in grid cells, not pixels
        this.k = k;

        this.grid = Array.from({ length: rows }, () => Array(columns).fill(null));
        this.samples = [];
    }

    isValid(row, column) {
        if (row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
            return false;
        }

        for (let r = -this.radius; r <= this.radius; r++) {
            for (let c = -this.radius; c <= this.radius; c++) {
                const nr = row + r;
                const nc = column + c;

                if (nr < 0 || nc < 0 || nr >= this.rows || nc >= this.columns) continue;

                const neighbor = this.grid[nr][nc];
                if (neighbor !== null) {
                    const dr = nr - row;
                    const dc = nc - column;
                    const distSq = dr * dr + dc * dc;
                    if (distSq < this.radius * this.radius) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    sample(initial) {
        const samples = [];
        const active = [];

        const { row, column } = initial;

        if (!this.isValid(row, column)) return [];

        const initialSample = { row, column };

        this.grid[row][column] = initialSample;

        samples.push(initialSample);
        active.push(initialSample);

        while (active.length > 0) {
            let found = false;

            const idx = Math.floor(Math.random() * active.length);
            const point = active[idx];

            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.radius + Math.random();

                const offsets = {
                    vertical: Math.round(distance * Math.sin(angle)),
                    horizontal: Math.round(distance * Math.cos(angle))
                };

                const target = {
                    row: point.row + offsets.vertical,
                    column: point.column + offsets.horizontal,
                };

                if (this.isValid(target.row, target.column)) {
                    const candidate = {
                        row: target.row,
                        column: target.column
                    };

                    this.grid[target.row][target.column] = candidate;

                    samples.push(candidate);
                    active.push(candidate);

                    found = true;

                    break;
                }
            }

            if (!found) {
                active.splice(idx, 1);
            }
        }

        this.samples = samples;

        return samples;
    }
}
*/

/*
class Chunker {
    constructor(
        columns,
        rows,
        cellSize,
    ) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = cellSize;

        this.samples = [];

        this.generate();
    }

    generate = () => {
        const sampler = new PoissonDiskSampler(
            this.columns,
            this.rows,
            10
        );

        this.samples = sampler.sample({
            row: Math.floor(Math.random() * this.rows),
            column: Math.floor(Math.random() * this.columns)
        });
    }

    draw(ctx) {
        ctx.fillStyle = "white";

        for (const point of this.samples) {
            const x = point.column * this.cellSize;
            const y = point.row * this.cellSize;

            ctx.fillRect(
                x,
                y,
                this.cellSize,
                this.cellSize
            );
        }
    }
}
*/

/*
class PoissonDiskSampler {
    constructor(columns, rows, radius = 2, k = 30) {
        this.columns = columns;
        this.rows = rows;
        this.radius = radius; // in grid cells, not pixels
        this.k = k;

        this.grid = Array.from({ length: rows }, () => Array(columns).fill(null));
        this.samples = [];
    }

    isValid(row, column) {
        if (row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
            return false;
        }

        for (let r = -this.radius; r <= this.radius; r++) {
            for (let c = -this.radius; c <= this.radius; c++) {
                const nr = row + r;
                const nc = column + c;

                if (nr < 0 || nc < 0 || nr >= this.rows || nc >= this.columns) continue;

                const neighbor = this.grid[nr][nc];
                if (neighbor !== null) {
                    const dr = nr - row;
                    const dc = nc - column;
                    const distSq = dr * dr + dc * dc;
                    if (distSq < this.radius * this.radius) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    sample(initial) {
        const samples = [];
        const active = [];

        const { row, column } = initial;

        if (!this.isValid(row, column)) return [];

        const initialSample = { row, column };

        this.grid[row][column] = initialSample;

        samples.push(initialSample);
        active.push(initialSample);

        while (active.length > 0) {
            let found = false;

            const idx = Math.floor(Math.random() * active.length);
            const point = active[idx];

            for (let i = 0; i < this.k; i++) {
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.radius + Math.random();

                const offsets = {
                    vertical: Math.round(distance * Math.sin(angle)),
                    horizontal: Math.round(distance * Math.cos(angle))
                };

                const target = {
                    row: point.row + offsets.vertical,
                    column: point.column + offsets.horizontal,
                };

                if (this.isValid(target.row, target.column)) {
                    const candidate = {
                        row: target.row,
                        column: target.column
                    };

                    this.grid[target.row][target.column] = candidate;

                    samples.push(candidate);
                    active.push(candidate);

                    found = true;

                    break;
                }
            }

            if (!found) {
                active.splice(idx, 1);
            }
        }

        this.samples = samples;

        return samples;
    }

    // New method to recalculate the boundary between two chunks
    recalculateBoundary(topBoundary, bottomBoundary) {
        // For simplicity, let's assume we're working with the last row of the top chunk and the first row of the bottom chunk

        // Recalculate the first row of the bottom chunk based on the top boundary
        for (let col = 0; col < this.columns; col++) {
            const topSample = topBoundary[col];
            const bottomSample = bottomBoundary[col];

            // Create an offset based on the top sample
            const offsetRow = topSample.row + Math.round(Math.random() * this.radius) - this.radius;
            const offsetCol = topSample.column + Math.round(Math.random() * this.radius) - this.radius;

            // Ensure the new sample is valid and falls within the valid area
            if (this.isValid(offsetRow, offsetCol)) {
                bottomBoundary[col] = { row: offsetRow, column: offsetCol };
            }
        }

        // Return the updated bottom boundary
        return bottomBoundary;
    }
}
*/

/*
class Chunker {
    constructor(columns, rows, cellSize) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = cellSize;

        this.accumulatedTime = 0;
        this.lastTimestamp = null;

        this.chunks = [];

        // Create initial chunks
        this.createChunkOnScreen();
        this.createChunkOffScreen();
    }

    chunk(offsetRow = 0, offsetColumn = 0) {
        const sampler = new PoissonDiskSampler(
            this.columns,
            this.rows,
            10
        );

        const cells = sampler.sample({
            row: Math.floor(Math.random() * this.rows),
            column: Math.floor(Math.random() * this.columns)
        });

        for (let cell of cells) {
            cell.row += offsetRow;
            cell.column += offsetColumn;
        }

        const colors = {
            a: 'rgba(0, 0, 255, 0.5)',
            b: 'rgba(0, 255, 255, 0.5)'
        }

        this.fillStyle = this.fillStyle === colors.a ? colors.b : colors.a;

        return {
            cells,
            fillStyle: this.fillStyle,
        };
    }

    createChunkOnScreen = () => {
        const chunk = this.chunk(0, 0);
        this.chunks.push(chunk);
    }

    createChunkOffScreen = () => {
        const lastChunk = this.chunks[this.chunks.length - 1];
        const topRow = Math.min(...lastChunk.cells.map(c => c.row));

        // Create new chunk right above the last one
        const chunkHeight = this.rows; // Assuming full-size chunk
        const chunk = this.chunk(topRow - chunkHeight, 0);

        this.chunks.push(chunk);
    }

    scrollDown = (timestamp, units = 1, scrollDuration = 1000) => {
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
    
        const deltaTime = timestamp - this.lastTimestamp;
        if (deltaTime <= 0) return;
    
        this.lastTimestamp = timestamp;
        this.accumulatedTime += deltaTime;
    
        const unitsToMove = Math.floor(this.accumulatedTime / scrollDuration) * units;
    
        if (unitsToMove > 0) {
            for (let chunk of this.chunks) {
                for (let cell of chunk.cells) {
                    cell.row += unitsToMove;
                }
            }
    
            this.accumulatedTime -= unitsToMove * scrollDuration;

            // Proceed only if we have at least two chunks
            if (this.chunks.length >= 2) {
                const previousChunk = this.chunks[this.chunks.length - 2];
                const latestChunk = this.chunks[this.chunks.length - 1];
    
                const previousTopRow = Math.min(...previousChunk.cells.map(c => c.row));

                // Trigger when the previous chunk hits halfway
                if (previousTopRow >= this.rows / 2) {
                    const latestTopRow = Math.min(...latestChunk.cells.map(c => c.row));

                    const latestHeight =
                        Math.max(...latestChunk.cells.map(c => c.row)) -
                        latestTopRow + 1;
    
                    const newChunk = this.chunk(latestTopRow - latestHeight, 0);

                    this.chunks.push(newChunk);
                }
            }

            // Remove fully offscreen chunks
            this.chunks = this.chunks.filter(chunk =>
                chunk.cells.some(cell => cell.row < this.rows)
            );
        }
    }
    
    draw(context) {
        for (const chunk of this.chunks) {
            const minRow = Math.min(...chunk.cells.map(c => c.row));
            const maxRow = Math.max(...chunk.cells.map(c => c.row));
            const minCol = Math.min(...chunk.cells.map(c => c.column));
            const maxCol = Math.max(...chunk.cells.map(c => c.column));

            const x = minCol * this.cellSize;
            const y = minRow * this.cellSize;
            const width = (maxCol - minCol + 1) * this.cellSize;
            const height = (maxRow - minRow + 1) * this.cellSize;

            context.save();
            context.fillStyle = chunk.fillStyle;
            context.fillRect(x, y, width, height);
            context.restore();

            context.fillStyle = "white";
            for (const cell of chunk.cells) {
                const x = cell.column * this.cellSize;
                const y = cell.row * this.cellSize;
                context.fillRect(x, y, this.cellSize, this.cellSize);
            }
        }
    }
}
*/

class Drawing {
    cells = new Set();           // All currently drawn cells
    undoStack = [];              // Stack of past actions
    redoStack = [];              // Stack of undone actions
    maxHistorySize = 3;
    drawing = false;
    isAltPressed = false;
    primedForFloodFill = false;

    constructor(element, context, cellSize) {
        this.element = element;
        this.context = context;
        this.cellSize = cellSize;

        this.element.addEventListener("mousedown", this.handleMouseDown);
        this.element.addEventListener("mouseup", this.handleMouseUp);
        this.element.addEventListener("mousemove", this.handleMouseMove);
        this.element.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    handleMouseDown = (event) => {
        this.drawing = true;
        this.isAltPressed = event.altKey;

        if (this.primedForFloodFill) {
            const [x, y] = this.getPosition(event);

            this.floodFill(x, y);

            return;
        }

        const timestamp = Date.now();

        // New action begins: push a new entry to undoStack
        this.undoStack.push({ timestamp, cells: [] });

        // Enforce undo history size
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        // Clear redo history (new action invalidates redo)
        this.redoStack = [];
    };

    handleMouseUp = () => {
        this.drawing = false;

        this.data();
    };

    handleMouseOut = () => {
        if (!this.drawing) return;

        this.drawing = false;

        this.data();
    };

    handleMouseMove = (event) => {
        if (!this.drawing) return;

        const [x, y] = this.getPosition(event);
        const key = `${x},${y}`;

        if (this.isAltPressed) {
            if (this.cells.has(key)) {
                this.cells.delete(key);
                this.context.clearRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        } else {
            if (!this.cells.has(key)) {
                this.cells.add(key);
                this.context.fillStyle = "white";
                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );

                // Add to most recent action
                const latestAction = this.undoStack[this.undoStack.length - 1];

                latestAction?.cells.push(key);
            }
        }
    };

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "z") {
            this.undo();
        }

        if (event.ctrlKey && event.key === "y") {
            this.redo();
        }

        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = true;
        }
    };

    handleKeyUp = (event) => {
        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = false;
        }
    };

    undo = () => {
        if (this.undoStack.length === 0) return;

        const lastAction = this.undoStack.pop();

        lastAction.cells.forEach(key => {
            this.cells.delete(key);

            const [x, y] = key.split(',').map(Number);

            this.context.clearRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });

        this.redoStack.push(lastAction);

        if (this.redoStack.length > this.maxHistorySize) {
            this.redoStack.shift();
        }
    };

    redo = () => {
        if (this.redoStack.length === 0) return;

        const action = this.redoStack.pop();

        action.cells.forEach(key => {
            if (!this.cells.has(key)) {
                this.cells.add(key);

                const [x, y] = key.split(',').map(Number);

                this.context.fillStyle = "white";

                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        });

        this.undoStack.push(action);

        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }
    };

    getPosition = (event) => {
        const rect = this.element.getBoundingClientRect();

        const x = Math.round((event.clientX - rect.left) / this.cellSize);
        const y = Math.round((event.clientY - rect.top) / this.cellSize);

        return [x, y];
    };

    render = () => {
        this.cells.forEach(key => {
            const [x, y] = key.split(',').map(Number);

            this.context.fillStyle = "white";

            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });
    };

    data = () => {
        // First find bounds of the drawing
        const positions = Array.from(this.cells).map(key => key.split(',').map(Number));

        if (positions.length === 0) {
            console.log("[]");
            return;
        }

        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        positions.forEach(([x, y]) => {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        });

        const rows = maxY - minY + 1;
        const cols = maxX - minX + 1;

        const grid = Array.from({ length: rows }, () =>
            Array(cols).fill(0)
        );

        positions.forEach(([x, y]) => {
            grid[y - minY][x - minX] = 1;
        });

        console.log(JSON.stringify(grid));
    }

    floodFill = (startX, startY) => {
        const maxCols = Math.floor(this.element.width / this.cellSize);
        const maxRows = Math.floor(this.element.height / this.cellSize);

        const isInsideBounds = (x, y) => x >= 0 && y >= 0 && x < maxCols && y < maxRows;

        const startKey = `${startX},${startY}`;
        if (this.cells.has(startKey)) return;

        const filled = new Set();
        const queue = [[startX, startY]];
        const newCells = [];

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const key = `${x},${y}`;

            if (!isInsideBounds(x, y) || filled.has(key) || this.cells.has(key)) {
                continue;
            }

            filled.add(key);
            this.cells.add(key);
            newCells.push(key);

            this.context.fillStyle = "white";
            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );

            queue.push([x + 1, y]);
            queue.push([x - 1, y]);
            queue.push([x, y + 1]);
            queue.push([x, y - 1]);
        }

        const timestamp = Date.now();
        this.undoStack.push({ timestamp, cells: newCells });
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        this.redoStack = [];

        this.data();
    };
};

class PoissonDiskSampler {
    constructor(columns, rows, radius = 2, limit = 30) {
        this.columns = columns;
        this.rows = rows;
        this.radius = radius; // in grid cells, not pixels
        this.limit = limit;

        this.grid = Array.from({ length: rows }, () => Array(columns).fill(null));
        this.samples = [];
    }

    isValid(row, column) {
        if (row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
            return false;
        }

        for (let r = -this.radius; r <= this.radius; r++) {
            for (let c = -this.radius; c <= this.radius; c++) {
                const nr = row + r;
                const nc = column + c;

                if (nr < 0 || nc < 0 || nr >= this.rows || nc >= this.columns) continue;

                const neighbor = this.grid[nr][nc];

                if (neighbor !== null) {
                    const dr = nr - row;
                    const dc = nc - column;
                    const distSq = dr * dr + dc * dc;

                    if (distSq < this.radius * this.radius) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    sample(origin) {
        const samples = [];
        const active = [];

        if (!this.isValid(origin.position.y, origin.position.x)) return [];

        this.grid[origin.position.y][origin.position.x] = origin;

        samples.push(origin);
        active.push(origin);

        while (active.length > 0) {
            let found = false;

            const id = Math.floor(Math.random() * active.length);
            const point = active[id];

            for (let tries = 0; tries < this.limit; tries++) {
                const angle = Math.random() * 2 * Math.PI;
                const distance = this.radius + Math.random();

                const offsets = {
                    vertical: Math.round(distance * Math.sin(angle)),
                    horizontal: Math.round(distance * Math.cos(angle))
                };

                const candidate = {
                    position: {
                        x: point.position.x + offsets.vertical,
                        y: point.position.y + offsets.horizontal
                    }
                };

                if (this.isValid(candidate.position.y, candidate.position.x)) {
                    this.grid[candidate.position.y][candidate.position.x] = candidate;

                    samples.push(candidate);
                    active.push(candidate);

                    found = true;

                    break;
                }
            }

            if (!found) {
                active.splice(id, 1);
            }
        }

        this.samples = samples;

        return samples;
    }
}

class Chunker {
    constructor(columns, rows, cellSize) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = cellSize;

        this.radius = 10;
        this.accumulatedTime = 0;
        this.lastTimestamp = null;
        this.chunks = [];

        this.createChunkOnScreen();

        this.createChunkOffScreen({
            position: {
                y: -this.rows
            }
        });
    }

    chunk(offset = {position: {x: 0, y: 0}}) {
        const sampler = new PoissonDiskSampler(
            this.columns,
            this.rows,
            this.radius
        );

        const cells = sampler.sample({
            position: {
                x: Math.floor(Math.random() * this.columns),
                y: Math.floor(Math.random() * this.rows),
            }
        });

        for (let cell of cells) {
            cell.position.x += Math.floor(offset?.position?.x ?? 0);
            cell.position.y += Math.floor(offset?.position?.y ?? 0);
        }

        const colors = {
            a: 'rgba(0, 0, 255, 0.5)',
            b: 'rgba(0, 255, 255, 0.5)'
        }

        this.fillStyle = this.fillStyle === colors.a ? colors.b : colors.a;

        return {
            id: Math.random().toString(36).substring(2, 9),
            index: this.chunks.length,
            hasCreatedNewChunk: false,
            width: this.columns,
            height: this.rows,
            cells,
            fillStyle: this.fillStyle,
            position: {
                x: Math.floor(offset?.position?.x ?? 0), // In term of grid units.
                y: Math.floor(offset?.position?.y ?? 0) // In term of grid units.
            }
        };
    }

    createChunkOnScreen = () => {
        const chunk = this.chunk();

        this.chunks.push(chunk);
    }

    createChunkOffScreen = (offset) => {
        const chunk = this.chunk(offset);

        this.chunks.push(chunk);

        this.stitch();
    }

    removeChunk = (id) => {
        this.chunks = this.chunks.filter(chunk => chunk.id !== id);
    }

    scrollDown = (timestamp, units = 1, duration = 1000) => {
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;

            return;
        }

        const deltaTime = timestamp - this.lastTimestamp;

        if (deltaTime <= 0) {
            return;
        }

        this.lastTimestamp = timestamp;
        this.accumulatedTime += deltaTime;

        const steps = Math.floor(this.accumulatedTime / duration) * units;

        if (steps > 0) {
            if(!(this.chunks.length > 0)) {
                return;
            }

            for (let chunk of this.chunks) {
                // NOTE : REMOVE CHUNKS
                if(chunk.position.y > this.rows) {
                    this.removeChunk(chunk.id);

                    continue;
                }

                // NOTE : CREATE NEW CHUNK
                const bottom = chunk.position.y + chunk.height;
                const half = Math.floor(this.rows / 2);

                if(
                    !chunk.hasCreatedNewChunk &&
                    chunk.index > 0 &&
                    bottom >= half
                ) {
                    chunk.hasCreatedNewChunk = true;

                    this.createChunkOffScreen({
                        position: {
                            y: chunk.position.y - chunk.height
                        }
                    });
                }

                chunk.position.y += units;

                for (let cell of chunk.cells) {
                    cell.position.y += units;
                }
            }

            this.accumulatedTime -= steps * duration;
        }

    }

    // TODO
    stitch = () => {
        const current = this.chunks[this.chunks.length - 2];
        const next = this.chunks[this.chunks.length - 1];

        const points = [];

        next.cells.forEach((cell, index) => {
            const target = next.position.y + (next.height - this.radius);

            if (cell.position.y >= target) {
                next.cells[index].fillStyle = 'red';

                points.push({
                    index,
                    position: cell.position,
                    chunk: {
                        type: 'next',
                        height: next.height,
                        width: next.width,
                        position: next.position,
                    }
                });
            }
        });

        current.cells.forEach((cell, index) => {
            const target = current.position.y + this.radius;

            if (cell.position.y <= target) {
                current.cells[index].fillStyle = 'red';

                points.push({
                    index,
                    position: cell.position,
                    chunk: {
                        type: 'current',
                        height: current.height,
                        width: current.width,
                        position: current.position,
                    }
                });
            }
        });

        console.log("DEBUG::points", points);
    };

    draw(context) {
        context.save();

        for (const chunk of this.chunks) {
            context.fillStyle = chunk?.fillStyle || "white";

            context.fillRect(
                Math.floor(chunk.position.x * this.cellSize),
                Math.floor(chunk.position.y * this.cellSize),
                Math.floor(chunk.width * this.cellSize),
                Math.floor(chunk.height * this.cellSize),
            );

            for (const cell of chunk.cells) {
                context.fillStyle = cell?.fillStyle || "white";

                context.fillRect(
                    Math.floor(cell.position.x * this.cellSize),
                    Math.floor(cell.position.y * this.cellSize),
                    Math.floor(this.cellSize),
                    Math.floor(this.cellSize),
                );
            }

            context.restore();
        }
    }
};

export default class Canvas {
    drawing = false;
    backgroundColor = "rgb(12, 12, 12)";
    cellSize = 5;
    drawn = new Set();

    resizeCanvas = () => {
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;

        this.rows = Math.floor(this.element.height / this.cellSize);
        this.columns = Math.floor(this.element.width / this.cellSize);
    }

    drawGrid = () => {
        this.context.strokeStyle = "rgb(9, 9, 9)";

        for (let i = 0; i <= this.columns; i++) {
            const x = i * this.cellSize;

            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.element.height);
            this.context.stroke();
        }

        for (let j = 0; j <= this.rows; j++) {
            const y = j * this.cellSize;

            this.context.beginPath();
            this.context.moveTo(0, y);
            this.context.lineTo(this.element.width, y);
            this.context.stroke();
        }
    }

    initialize = () => {
        this.element = document.createElement("canvas");
        this.element.id = "background";
        this.context = this.element.getContext("2d");
        this.context.imageSmoothingEnabled = false;

        document.body.appendChild(this.element);

        window.addEventListener("resize", this.resizeCanvas);

        this.resizeCanvas();

        this.chunker = new Chunker(
            this.columns,
            this.rows,
            this.cellSize
        );

        this.loop();
    }

    loop = (timestamp) => {
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);

        this.chunker.scrollDown(timestamp, 5, 100);
        this.chunker.draw(this.context);

        this.drawGrid();

        requestAnimationFrame(this.loop);
    }
};

/*
class Clouds {
    constructor(
        viewport,
        cellSize,
        buffer = 50,
    ) {
        this.viewport = viewport;
        this.cellSize = cellSize;
        this.buffer = buffer;
        this.clouds = [];
        this.lastUpdateTime = 0;

        // TODO
        // this.sampler = new PoissonDiskSampler(
        //     Math.floor(this.viewport.width / this.cellSize),
        //     Math.floor(this.viewport.height / this.cellSize),
        //     this.cellSize
        // );

        // this.sampler.sample({
        //     position: {
        //         x: Math.floor(Math.random() * (this.viewport.width + this.buffer * 2)) - this.buffer,
        //         y: Math.floor(Math.random() * this.viewport.height)
        //     }
        // });

        // this.clouds = this.sampler.samples.map(sample => {
        //     const prefab = this.randomPrefab();

        //     return { position: sample.position, prefab };
        // });

        // console.log("DEBUG::this.sampler.samples", this.sampler.samples);
    }

    // Update cloud movement and resample if necessary
    update(timestamp) {
        const deltaTime = timestamp - this.lastUpdateTime;
        
        if (deltaTime >= 1000) { // 1 second update
            this.lastUpdateTime = timestamp;

            const newClouds = [];

            // Move each cloud
            for (const cloud of this.clouds) {
                cloud.position.x += 1; // Move right by 1 cell
                
                const prefabWidth = cloud.prefab[0].length;

                // If cloud is off the screen, resample it
                if (cloud.position.x > this.viewport.width + prefabWidth) {
                    this.sampler.unmarkOccupied(cloud);

                    cloud.position = this.getOffscreenPosition();

                    this.sampler.sampleFromInitialPoint(cloud.position);
                }

                newClouds.push(cloud);
            }

            // Replace the old clouds with the updated ones
            this.clouds = newClouds;
        }
    }

    getOffscreenPosition() {
        return {
            x: -Math.floor(Math.random() * (this.viewport.width + this.buffer * 2)),
            y: Math.floor(Math.random() * this.gridHeight)
        };
    }

    // Randomly select a cloud prefab (cloud shape)
    randomPrefab() {
        return prefabs[Math.floor(Math.random() * prefabs.length)];
    }

    // Draw clouds on the context
    draw(context) {
        for (const cloud of this.clouds) {
            const { position, prefab } = cloud;
            context.fillStyle = 'rgba(25, 25, 25)';
            for (let row = 0; row < prefab.length; row++) {
                for (let col = 0; col < prefab[row].length; col++) {
                    if (prefab[row][col] === 1) {
                        context.fillRect(
                            (position.x + col - Math.floor(prefab[0].length / 2)) * this.sampler.cellSize,
                            (position.y + row - Math.floor(prefab.length / 2)) * this.sampler.cellSize,
                            this.sampler.cellSize,
                            this.sampler.cellSize
                        );
                    }
                }
            }
        }
    }
}
*/

/*
class Drawing {
    cells = new Set();           // All currently drawn cells
    undoStack = [];              // Stack of past actions
    redoStack = [];              // Stack of undone actions
    maxHistorySize = 3;
    drawing = false;
    isAltPressed = false;
    primedForFloodFill = false;

    constructor(element, context, cellSize) {
        this.element = element;
        this.context = context;
        this.cellSize = cellSize;

        this.element.addEventListener("mousedown", this.handleMouseDown);
        this.element.addEventListener("mouseup", this.handleMouseUp);
        this.element.addEventListener("mousemove", this.handleMouseMove);
        this.element.addEventListener("mouseout", this.handleMouseOut);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    handleMouseDown = (event) => {
        this.drawing = true;
        this.isAltPressed = event.altKey;

        if (this.primedForFloodFill) {
            const [x, y] = this.getPosition(event);

            this.floodFill(x, y);

            return;
        }

        const timestamp = Date.now();

        // New action begins: push a new entry to undoStack
        this.undoStack.push({ timestamp, cells: [] });

        // Enforce undo history size
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        // Clear redo history (new action invalidates redo)
        this.redoStack = [];
    };

    handleMouseUp = () => {
        this.drawing = false;

        this.data();
    };

    handleMouseOut = () => {
        if (!this.drawing) return;

        this.drawing = false;

        this.data();
    };

    handleMouseMove = (event) => {
        if (!this.drawing) return;

        const [x, y] = this.getPosition(event);
        const key = `${x},${y}`;

        if (this.isAltPressed) {
            if (this.cells.has(key)) {
                this.cells.delete(key);
                this.context.clearRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        } else {
            if (!this.cells.has(key)) {
                this.cells.add(key);
                this.context.fillStyle = "white";
                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );

                // Add to most recent action
                const latestAction = this.undoStack[this.undoStack.length - 1];

                latestAction?.cells.push(key);
            }
        }
    };

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "z") {
            this.undo();
        }

        if (event.ctrlKey && event.key === "y") {
            this.redo();
        }

        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = true;
        }
    };

    handleKeyUp = (event) => {
        if (event.key === "f" || event.key === "F") {
            this.primedForFloodFill = false;
        }
    };

    undo = () => {
        if (this.undoStack.length === 0) return;

        const lastAction = this.undoStack.pop();

        lastAction.cells.forEach(key => {
            this.cells.delete(key);

            const [x, y] = key.split(',').map(Number);

            this.context.clearRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });

        this.redoStack.push(lastAction);

        if (this.redoStack.length > this.maxHistorySize) {
            this.redoStack.shift();
        }
    };

    redo = () => {
        if (this.redoStack.length === 0) return;

        const action = this.redoStack.pop();

        action.cells.forEach(key => {
            if (!this.cells.has(key)) {
                this.cells.add(key);

                const [x, y] = key.split(',').map(Number);

                this.context.fillStyle = "white";

                this.context.fillRect(
                    x * this.cellSize,
                    y * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        });

        this.undoStack.push(action);

        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }
    };

    getPosition = (event) => {
        const rect = this.element.getBoundingClientRect();

        const x = Math.round((event.clientX - rect.left) / this.cellSize);
        const y = Math.round((event.clientY - rect.top) / this.cellSize);

        return [x, y];
    };

    render = () => {
        this.cells.forEach(key => {
            const [x, y] = key.split(',').map(Number);

            this.context.fillStyle = "white";

            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        });
    };

    data = () => {
        // First find bounds of the drawing
        const positions = Array.from(this.cells).map(key => key.split(',').map(Number));

        if (positions.length === 0) {
            console.log("[]");
            return;
        }

        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        positions.forEach(([x, y]) => {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        });

        const rows = maxY - minY + 1;
        const cols = maxX - minX + 1;

        const grid = Array.from({ length: rows }, () =>
            Array(cols).fill(0)
        );

        positions.forEach(([x, y]) => {
            grid[y - minY][x - minX] = 1;
        });

        console.log(JSON.stringify(grid));
    }

    floodFill = (startX, startY) => {
        const maxCols = Math.floor(this.element.width / this.cellSize);
        const maxRows = Math.floor(this.element.height / this.cellSize);

        const isInsideBounds = (x, y) => x >= 0 && y >= 0 && x < maxCols && y < maxRows;

        const startKey = `${startX},${startY}`;
        if (this.cells.has(startKey)) return;

        const filled = new Set();
        const queue = [[startX, startY]];
        const newCells = [];

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const key = `${x},${y}`;

            if (!isInsideBounds(x, y) || filled.has(key) || this.cells.has(key)) {
                continue;
            }

            filled.add(key);
            this.cells.add(key);
            newCells.push(key);

            this.context.fillStyle = "white";
            this.context.fillRect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );

            queue.push([x + 1, y]);
            queue.push([x - 1, y]);
            queue.push([x, y + 1]);
            queue.push([x, y - 1]);
        }

        const timestamp = Date.now();
        this.undoStack.push({ timestamp, cells: newCells });
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }

        this.redoStack = [];

        this.data();
    };
};
*/
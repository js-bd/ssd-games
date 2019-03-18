var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    D: 68,
    S: 83,
    W: 87
}
    , keys = [
    {
        keys: [KEY.LEFT, KEY.A],
        mode: 'down',
        action: function () {
            keyLeft = true
            console.log("keyLeft: ", keyLeft)
        }
    },
    {
        keys: [KEY.RIGHT, KEY.D],
        mode: 'down',
        action: function () {
            keyRight = true
            console.log("keyRight: ", keyRight)
        }
    },
    {
        keys: [KEY.UP, KEY.W],
        mode: 'down',
        action: function () {
            keyFaster = true
            console.log("keyFaster: ", keyFaster)
        }
    },
    {
        keys: [KEY.DOWN, KEY.S],
        mode: 'down',
        action: function () {
            keySlower = true
            console.log("keySlower: ", keySlower)
        }
    },
    {
        keys: [KEY.LEFT, KEY.A],
        mode: 'up',
        action: function () {
            keyLeft = false
            console.log("keyLeft: ", keyLeft)
        }
    },
    {
        keys: [KEY.RIGHT, KEY.D],
        mode: 'up',
        action: function () {
            keyRight = false
            console.log("keyRight: ", keyRight)
        }
    },
    {
        keys: [KEY.UP, KEY.W],
        mode: 'up',
        action: function () {
            keyFaster = false
            console.log("keyFaster: ", keyFaster)
        }
    },
    {
        keys: [KEY.DOWN, KEY.S],
        mode: 'up',
        action: function () {
            keySlower = false
            console.log("keySlower: ", keySlower)
        }
    }
]
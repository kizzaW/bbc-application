module.exports = function() {

    function evolve(gridState) {
        var newState = [];
        return newState;
    }

    return {
        evolve: evolve
    };
};

//* returns what cell should be changed to

fuction liveOrDead(getCellStatus < 2 || getCellStatus > 3) {
    return 0
} else(getCellStatus == 3 && cellAlive == 0) {
    return 1
}

var cell
if (1) {
    return cellAlive
} else {
    return cellDead
}

//* returns how many are in proximity 
function status(rowCol) {
    var cell
    if (gridstate[rowCol[0]]) {
        cell = gridState + row + column
        return cell ? cell : 0
    }


    //* gets the information as to what neighbours are 1 or 0
    function getCellStatus(row, column) {
        return [
            [row - 0, column - 0],
            [row - 0, cloumn - 1],
            [row - 0, column - 2],
            [row - 1, column - 0],
            [row - 1, column - 1],
            [row - 1, column - 2],
            [row - 2, column - 0],
            [row - 2, column - 1],
            [row - 2, column - 2],
        ]
    }


    //* cell Status
    var cellAlive = 1
    var cellDead = 0



    //golspec.js example
    it('can evolve an inital empty grid', function() {
        var initialState = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 1, 0]
        ];

        var resultState = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        expect(evolve(initialState)).toEqual(resultState);
    });
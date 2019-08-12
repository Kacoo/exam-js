/**
 * leetcode@Kacoo
 * 79. Word Search
 * https://leetcode.com/problems/word-search/
 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var length = board[0].length;
    var newWordList = word.split("");
    var newBoard = board.flat().map(function (item, index) {
        var vertice = [];
        vertice.push(item);
        var flag = newBoard.indexOf(item);
        if (flag > -1) {
            newBoard.splice(flag, 1);
            return true;
        }

        vertice[index].push();
        return false;
    });
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
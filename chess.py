class ChessGame:
    def __init__(self):
        self.board = [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ]
        self.current_player = 'white'
        self.is_checkmate = False

    def print_board(self):
        for row in self.board:
            print(" ".join(row))

    def is_valid_move(self, start, end):
        # Add move validation logic here
        return True

    def move(self, start, end):
        if self.is_valid_move(start, end):
            row_start, col_start = start
            row_end, col_end = end
            self.board[row_end][col_end] = self.board[row_start][col_start]
            self.board[row_start][col_start] = '.'
            self.toggle_player()

    def toggle_player(self):
        self.current_player = 'black' if self.current_player == 'white' else 'white'

    def play(self):
        while not self.is_checkmate:
            self.print_board()
            print(f"{self.current_player}'s turn:")
            start = input("Enter start position (e.g., 'a2'): ")
            end = input("Enter end position (e.g., 'a4'): ")
            self.move(self.position_to_indices(start), self.position_to_indices(end))

    def position_to_indices(self, position):
        col, row = position
        col = ord(col) - ord('a')
        row = 8 - int(row)
        return row, col

if __name__ == "__main__":
    game = ChessGame()
    game.play()

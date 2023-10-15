import turtle

# Function to draw a fractal tree
def fractal_tree(branch_len, t, branch_width, colors=('brown', 'green')):
    if branch_len > 5:
        color = colors[0] if branch_len < 30 else colors[1]
        t.pensize(branch_width)
        t.pencolor(color)
        t.forward(branch_len)
        t.right(20)
        fractal_tree(branch_len - 15, t, branch_width - 1)  # Recursive call for the right branch
        t.left(40)
        fractal_tree(branch_len - 15, t, branch_width - 1)  # Recursive call for the left branch
        t.right(20)
        t.backward(branch_len)
        t.pencolor('brown')  # Reset the pen color to brown

# Function to customize the fractal tree
def customize_tree():
    branch_len = int(input("Enter the initial branch length (e.g., 100): "))
    branch_width = int(input("Enter the initial branch width (e.g., 5): "))
    colors = input("Enter colors for trunk and leaves (e.g., 'brown green'): ").split()
    return branch_len, branch_width, colors

# Main function
def main():
    t = turtle.Turtle()
    my_win = turtle.Screen()
    t.left(90)
    t.up()
    t.backward(100)
    t.down()
    
    # Customize the tree
    branch_len, branch_width, colors = customize_tree()
    
    fractal_tree(branch_len, t, branch_width, colors)
    my_win.exitonclick()

main()

# Representation of a graph using adjacency matrix 
def add_edge(mat, i, j):
    """
    Add an edge between two vertices in an undirected, unweighted graph.
    """
    mat[i][j] = 1
    mat[j][i] = 1
    # graph is undirected unweighted 

def display_matrix(mat):
    # Displaying the Adjacency Matrix 
    for row in mat:
        print(" ".join(map(str, row)))

#main function to run the program 
if __name__ == "__main__":
    num_vertices = 3 # number of vertices
    mat = [[0] * num_vertices for _ in range(num_vertices)]
    add_edge(mat, 0, 1)
    add_edge(mat, 1, 2)
    add_edge(mat, 0, 2)
    
    # Displaying adjacency matrix
    print("Adjacency Matrix:")
    display_matrix(mat)
display_matrix(mat)



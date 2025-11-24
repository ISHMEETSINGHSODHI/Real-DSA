from collections import deque

class CBTInserter:
    def __init__(self, root):
        self.root = root
        self.deque = deque()
        
        # Level-order traversal to populate deque with incomplete nodes
        queue = deque([root])
        while queue:
            node = queue.popleft()
            if not node.left or not node.right:
                self.deque.append(node)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    def insert(self, val):
        new_node = TreeNode(val)
        parent = self.deque[0]  # Parent node for insertion
        
        if not parent.left:
            parent.left = new_node
        else:
            parent.right = new_node
            self.deque.popleft()  # Remove node once it has two children
        
        self.deque.append(new_node)  # Add new node to deque
        return parent.val

    def get_root(self):
        return self.root

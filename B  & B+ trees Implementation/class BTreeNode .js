class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t; // Minimum degree
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }

  search(key) {
    let i = 0;

    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }

    if (i < this.keys.length && this.keys[i] === key) {
      return this;
    }

    if (this.leaf) {
      return null;
    }

    return this.children[i].search(key);
  }

  splitChild(index) {
    const t = this.t;
    const child = this.children[index];
    const newNode = new BTreeNode(t, child.leaf);

    // Middle key moves up
    const middleKey = child.keys[t - 1];

    // Copy second half keys
    newNode.keys = child.keys.slice(t);
    child.keys = child.keys.slice(0, t - 1);

    // Copy children if not leaf
    if (!child.leaf) {
      newNode.children = child.children.slice(t);
      child.children = child.children.slice(0, t);
    }

    this.children.splice(index + 1, 0, newNode);
    this.keys.splice(index, 0, middleKey);
  }

  insertNonFull(key) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      this.keys.push(null);

      while (i >= 0 && key < this.keys[i]) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }

      this.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }

      i++;

      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i);

        if (key > this.keys[i]) {
          i++;
        }
      }

      this.children[i].insertNonFull(key);
    }
  }
}

class BTree {
  constructor(t = 2) {
    this.t = t;
    this.root = new BTreeNode(t, true);
  }

  search(key) {
    return this.root.search(key);
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length === 2 * this.t - 1) {
      const newRoot = new BTreeNode(this.t, false);

      newRoot.children.push(root);
      newRoot.splitChild(0);

      let i = key > newRoot.keys[0] ? 1 : 0;
      newRoot.children[i].insertNonFull(key);

      this.root = newRoot;
    } else {
      root.insertNonFull(key);
    }
  }

  print(node = this.root, level = 0) {
    console.log(" ".repeat(level * 2) + node.keys.join(", "));

    if (!node.leaf) {
      for (const child of node.children) {
        this.print(child, level + 1);
      }
    }
  }
}
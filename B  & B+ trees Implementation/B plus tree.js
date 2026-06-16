class BPlusNode {
  constructor(isLeaf = false) {
    this.isLeaf = isLeaf;
    this.keys = [];
    this.children = [];
    this.next = null; // leaf linkage
  }
}

class BPlusTree {
  constructor(order = 3) {
    this.order = order;
    this.root = new BPlusNode(true);
  }

  search(key) {
    let node = this.root;

    while (!node.isLeaf) {
      let i = 0;

      while (i < node.keys.length && key >= node.keys[i]) {
        i++;
      }

      node = node.children[i];
    }

    return node.keys.includes(key);
  }

  insert(key) {
    const result = this._insert(this.root, key);

    if (result) {
      const newRoot = new BPlusNode(false);

      newRoot.keys = [result.key];
      newRoot.children = [this.root, result.right];

      this.root = newRoot;
    }
  }

  _insert(node, key) {
    if (node.isLeaf) {
      node.keys.push(key);
      node.keys.sort((a, b) => a - b);

      if (node.keys.length < this.order) {
        return null;
      }

      return this._splitLeaf(node);
    }

    let i = 0;

    while (i < node.keys.length && key >= node.keys[i]) {
      i++;
    }

    const split = this._insert(node.children[i], key);

    if (!split) {
      return null;
    }

    node.keys.splice(i, 0, split.key);
    node.children.splice(i + 1, 0, split.right);

    if (node.keys.length < this.order) {
      return null;
    }

    return this._splitInternal(node);
  }

  _splitLeaf(node) {
    const mid = Math.ceil(node.keys.length / 2);

    const right = new BPlusNode(true);

    right.keys = node.keys.splice(mid);

    right.next = node.next;
    node.next = right;

    return {
      key: right.keys[0],
      right
    };
  }

  _splitInternal(node) {
    const mid = Math.floor(node.keys.length / 2);

    const promoted = node.keys[mid];

    const right = new BPlusNode(false);

    right.keys = node.keys.slice(mid + 1);
    right.children = node.children.slice(mid + 1);

    node.keys = node.keys.slice(0, mid);
    node.children = node.children.slice(0, mid + 1);

    return {
      key: promoted,
      right
    };
  }

  range(start, end) {
    let node = this.root;

    while (!node.isLeaf) {
      let i = 0;

      while (i < node.keys.length && start >= node.keys[i]) {
        i++;
      }

      node = node.children[i];
    }

    const result = [];

    while (node) {
      for (const key of node.keys) {
        if (key >= start && key <= end) {
          result.push(key);
        }

        if (key > end) {
          return result;
        }
      }

      node = node.next;
    }

    return result;
  }
}
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) {
        return undefined; // Avoid duplicates
      }

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // Helper function to insert recursively
    const insertHelper = (node) => {
      if (val === node.val) {
        return undefined; // Avoid duplicates
      }

      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        return insertHelper(node.left);
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        return insertHelper(node.right);
      }
    };

    return insertHelper(this.root);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) {
        return current;
      }

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val) {
    // Helper function to find recursively
    const findHelper = (node) => {
      if (!node) {
        return undefined;
      }

      if (val === node.val) {
        return node;
      }

      if (val < node.val) {
        return findHelper(node.left);
      } else {
        return findHelper(node.right);
      }
    };

    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the tree using pre-order DFS.
   * Return an array of visited nodes. */
  dfsPreOrder() {
    const visited = [];

    // Helper function to perform pre-order DFS
    const dfsPreOrderHelper = (node) => {
      if (node) {
        visited.push(node.val);
        dfsPreOrderHelper(node.left);
        dfsPreOrderHelper(node.right);
      }
    };

    dfsPreOrderHelper(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the tree using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder() {
    const visited = [];

    // Helper function to perform in-order DFS
    const dfsInOrderHelper = (node) => {
      if (node) {
        dfsInOrderHelper(node.left);
        visited.push(node.val);
        dfsInOrderHelper(node.right);
      }
    };

    dfsInOrderHelper(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the tree using post-order DFS.
   * Return an array of visited nodes. */
  dfsPostOrder() {
    const visited = [];

    // Helper function to perform post-order DFS
    const dfsPostOrderHelper = (node) => {
      if (node) {
        dfsPostOrderHelper(node.left);
        dfsPostOrderHelper(node.right);
        visited.push(node.val);
      }
    };

    dfsPostOrderHelper(this.root);
    return visited;
  }

  /** bfs(): Traverse the tree using BFS.
   * Return an array of visited nodes. */
  bfs() {
    const visited = [];
    const queue = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const current = queue.shift();
      visited.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;

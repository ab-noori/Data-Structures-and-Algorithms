class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function arrayToTree(array, index = 0) {
  if (index >= array.length || array[index] === null) {
    return null;
  }

  const node = new Node(array[index]);
  node.left = arrayToTree(array, 2 * index + 1);
  node.right = arrayToTree(array, 2 * index + 2);

  return node;
}

function validBST(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  if ((min && node.data <= min) || (max && node.data >= max)) {
    return false;
  }

  return (
    validBST(node.left, min, node.data) && validBST(node.right, node.data, max)
  );
}

function searchTree(array) {
  const root = arrayToTree(array);
  return validBST(root, null, null);
}

console.log(searchTree([10, 4, 12])); // Output: true
console.log(searchTree([10, 5, 7])); // Output: false

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);
console.log(n1);
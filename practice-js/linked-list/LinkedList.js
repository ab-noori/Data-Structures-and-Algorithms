class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert firt node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        // if index is first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // set current to first
        current = this.head;

        let count = 0;

        while (count < index) {
            previous = current; // Node before the index
            count++;
            current = current.next; // Node after the index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    gitAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if(count == index){
                console.log(current.data);
            }

            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index) {
        if(index < 0 || index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list

    // Print list data 
    PrintListData() {
        let current = this.head;

        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList()

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(499);
ll.insertAt(313, 4)

ll.removeAt(1);

ll.PrintListData();

// ll.gitAt(4);

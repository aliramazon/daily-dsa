const reverseSinglyLinkedListV1 = (list) => {
    let currentNode = list.head;
    let prevNode = null;
    let nextNode;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    [list.head, list.tail] = [list.tail, list.head];
};

const reverseSinglyLinkedListV2 = (list) => {
    let currentNode = list.head;
    let prevNode = null;
    let nextNode;

    let originalHead = list.head;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.tail = originalHead;
    list.head = prevNode;
};

const reverseDoublyLinkedList = (list) => {
    let currentNode = list.head;
    let prevNode = null;
    let nextNode;

    let originalHead = list.head;
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;

        currentNode.prev = nextNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.tail = originalHead;
    list.head = prevNode;

    return list;
};

const nodeA = { value: "A", next: null, prev: null };
const nodeB = { value: "B", next: null, prev: null };
const nodeC = { value: "C", next: null, prev: null };
const nodeD = { value: "D", next: null, prev: null };

// Connect nodes to form: A <-> B <-> C <-> D
nodeA.next = nodeB;
nodeB.prev = nodeA;
nodeB.next = nodeC;
nodeC.prev = nodeB;
nodeC.next = nodeD;
nodeD.prev = nodeC;

const list = {
    head: nodeA,
    tail: nodeD,
};

console.log(reverseDoublyLinkedList(list));

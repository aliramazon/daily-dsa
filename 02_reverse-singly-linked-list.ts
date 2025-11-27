type NullableNode = Node | null;

interface Node {
    next: NullableNode;
    value: number;
}

interface SinglyLinkedList {
    head: NullableNode;
}

const reverse = (list: SinglyLinkedList): SinglyLinkedList => {
    let currentNode: NullableNode = list.head;
    let prevNode: NullableNode = null;
    let nextNode: NullableNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.head = prevNode;

    return list;
};

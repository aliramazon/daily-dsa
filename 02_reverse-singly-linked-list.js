const reverse = (list) => {
    let current = list.head;
    let prevNode = null;
    let nextNode;

    list.tail = list.head;

    while (current) {
        nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }

    list.head = prevNode;

    return list;
};

class LinkedListNode {
    data;
    link;
}
class LinkedListHead {
    head;
    constructor(head = null) {
        if (!head instanceof LinkedListNode) {
            throw new Error("연결 리스트 노드가 아닙니다.");
        }
        this.head = head;
    }
}
const addNode = (h, data) => {
    let newNode;
    let lastNode;
    newNode = new LinkedListNode();
    newNode.data = data;
    newNode.link = null;
    if (!(h && h.head)) {
        h.head = newNode;
    } else {
        lastNode = h.head;
        while (lastNode.link) {
            lastNode = lastNode.link;
        }
        lastNode.link = newNode;
    }
    print(h);
};
const deleteNode = (h) => {
    let prevNode;
    let delNode;
    if (!h.head) {
        return;
    }
    if (!(h.head && h.head.link)) {
        h.head = null;
        return;
    } else {
        prevNode = h.head;
        delNode = h.head.link;
        while (delNode.link) {
            prevNode = delNode;
            delNode = delNode.link;
        }
        prevNode.link = null;
    }
    print(h);
};
const print = (h) => {
    let ptr = h.head;
    let str = "";
    while (true) {
        str += ptr.data;
        if (ptr && ptr.link == null) {
            break;
        }
        ptr = ptr.link;
    }
    console.log(str);
};
const h = new LinkedListHead();
addNode(h, "월");
addNode(h, "화");
addNode(h, "수");
addNode(h, "목");
addNode(h, "금");
addNode(h, "토");
addNode(h, "일");
deleteNode(h);
deleteNode(h);
deleteNode(h);
deleteNode(h);
deleteNode(h);
deleteNode(h);
deleteNode(h);

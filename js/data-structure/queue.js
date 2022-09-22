class Queue {
    // 삭제 위치
    #front = -1;
    // 삽입 위치
    #rear = -1;
    #maxSize = 0;
    #elements = [];
    constructor(maxSize) {
        if (!(Number.isInteger(maxSize) && maxSize >= 0)) {
            throw new Error(
                "큐의 사이즈는 0 이상 정수형이여야 합니다." + maxSize
            );
        }
        this.#maxSize = maxSize;
    }

    add(element) {
        if (this.isFull()) {
            throw new Error("큐가 가득 찼습니다.");
        }
        this.#elements[++this.#rear] = element;
        this.#print();
        return element;
    }

    delete() {
        if (this.isEmpty()) {
            throw new Error("큐가 비었습니다.");
        }
        this.#front++;
        const element = this.#elements[this.#front];
        delete this.#elements[this.#front];
        this.#print();
        return element;
    }

    isFull() {
        return this.#rear === this.#maxSize - 1;
    }

    isEmpty() {
        return this.#front === this.#rear;
    }

    #print() {
        console.log("큐의 요소 : " + this.#elements);
        console.log("큐의 front/rear : " + this.#front + "/" + this.#rear);
    }
}

const queue = new Queue(5);
queue.add("A");
queue.add("B");
queue.add("C");
queue.add("D");
queue.add("E");

queue.delete();
queue.delete();
queue.delete();
queue.delete();
queue.delete();

// rear 의 값으로 큐가 가득찼다고 할 수 없음. 배열로 구현했기 때문에 발생되는 문제. 원형 큐로 문제를 해결할 것
// queue.add("A");

class CircleQueue {
    // 삭제 위치
    #front = 0;
    // 삽입 위치
    #rear = 0;
    #maxSize = 0;
    #elements = [];
    constructor(maxSize) {
        if (!(Number.isInteger(maxSize) && maxSize >= 0)) {
            throw new Error(
                "큐의 사이즈는 0 이상 정수형이여야 합니다." + maxSize
            );
        }
        this.#elements = new Array(maxSize + 1).fill(null);
        this.#maxSize = maxSize + 1;
    }

    add(element) {
        if (this.isFull()) {
            throw new Error("큐가 가득 찼습니다.");
        }
        this.#elements[this.#rear] = element;
        this.#rear = (this.#rear + 1) % this.#maxSize;
        this.#print();
    }

    delete() {
        if (this.isEmpty()) {
            throw new Error("큐가 비었습니다.");
        }
        const element = this.#elements[this.#front];
        this.#elements[this.#front] = null;
        this.#front = (this.#front + 1) % this.#maxSize;
        this.#print();
        return element;
    }

    isFull() {
        return this.#front === (this.#rear + 1) % this.#maxSize;
    }

    isEmpty() {
        return this.#front === this.#rear;
    }

    #print() {
        console.log("큐의 요소 : " + this.#elements);
        console.log("큐의 front/rear : " + this.#front + "/" + this.#rear);
    }
}

const queue = new CircleQueue(5);

queue.add("A");
queue.add("B");
queue.add("C");
queue.add("D");
queue.add("E");

queue.delete();

queue.add("F");

queue.delete();

queue.add("G");

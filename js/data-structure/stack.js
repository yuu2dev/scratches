class Stack {
    #top = -1;
    #maxSize = 0;
    #elements = [];

    constructor(maxSize = 5) {
        if (!(Number.isInteger(maxSize) && maxSize >= 0)) {
            throw new Error(
                "스택의 사이즈는 0 이상 정수형이여야 합니다." + maxSize
            );
        }
        this.#elements = new Array(maxSize);
        this.#maxSize = maxSize;
    }

    push(element) {
        if (this.isFull()) {
            throw new Error("스택이 가득 찼습니다.");
        }
        this.#elements[++this.#top] = element;
        this.#print();
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("스택이 비었습니다.");
        }
        const element = this.#elements[this.#top];
        delete this.#elements[this.#top];
        this.#top--;
        this.#print();
        return element;
    }

    isFull() {
        return this.#top + 1 >= this.#maxSize;
    }

    isEmpty() {
        return this.#top <= -1;
    }

    #print() {
        console.log("스택의 요소 : " + this.#elements);
        console.log("스택의 TOP : " + this.#top);
    }
}
const stack = new Stack(5);
stack.push("S");
stack.push("T");
stack.push("A");
stack.push("C");
stack.push("K");

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

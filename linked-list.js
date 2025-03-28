// linked-list.js

export class Node {
  constructor(key = null, value = null) {
    this.key = key
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {

    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head

    while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

  prepend(value) {

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  size() {
    if (!this.head)
      return 0;

    let current = this.head;
    let size = 1;

    while (current.next) {
      current = current.next;
      size++;
    }
    return size;
  }

  getHead() {
    if (!this.head)
      return null;

    return this.head.value;
  }

  getTail() {
    if (!this.head)
      return null;

    let current = this.head;

    while (current.next) {
      current = current.next
    }
    return current.value;
  }

  atIndex(index) {

    if (!this.head)
      return null;

    if (index < 0 || index >= this.size())
      return null;

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.value;
  }

  pop() {
    if (!this.head)
      return

    if (this.size() === 1) {
      const removed = this.head.value;
      this.head = null;
      return removed;
    }

    const length = this.size();
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < length - 2) {
      current = current.next;
      currentIndex++;
    }

    const removed = current.next.value;
    current.next = null;
    return removed;
      
  }

  contains(value) {

    let current = this.head;

    while (current) {

      if (current.value === value)
        return true;

      current = current.next
    }
    return false;
  }

  find(value) {

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (current.value === value)
        return currentIndex;

      current = current.next;
      currentIndex++;
    }
    return null;
  }

  toString() {

    let current = this.head;
    let string = '';

    while (current) {
      string += `( key: ${current.key}, value: ${current.value} ) -> `;
      current = current.next;

    }
    return string + null;
  }

  insertAt(value, index) {

    const newNode = new Node(value);
    const length = this.size();

    if (index < 0 || index > length)
      throw new Error('Invalid index');

    if (index === 0)
      return this.prepend(value);

    if (index === length)
      return this.append(value);

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeAt(index) {

    const length = this.size();

    if (index < 0 || index > length)
      throw new Error('Invalid index');

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    if (index === length - 1)
      return this.pop();

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.next
      currentIndex++
    }

    current.next = current.next.next;

  }

}
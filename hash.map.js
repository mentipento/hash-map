// hash-map.js

import LinkedList from "./linked-list.js";

class HashMap {

  constructor(loadFactor = 0.75, capacity = 16) {

    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.array = Array.from({ length: capacity }, () => new LinkedList());

  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {

    const hashCode = this.hash(key);
    const bucket = this.array[hashCode];

    let current = bucket.head;

    while(current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
        current = current.next;
    }

    bucket.append(key, value);

    if (this.length() > this.loadFactor * this.capacity) {
      this.resize();
    }

    return;
  }

  resize() {
    const oldEntries = this.entries();
    this.capacity *= 2;

    this.array = Array.from({length: this.capacity}, () => new LinkedList());

    oldEntries.forEach(([key, value]) => this.set(key, value));
  }

  get(key) {
    const hashCode = this.hash(key);
    const bucket = this.array[hashCode];

    let current = bucket.head;

    while (current) {
      if (current.key === key)
        return current.value;

      current = current.next;
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const bucket = this.array[hashCode];

    let current = bucket.head;

    while (current) {
      if (current.key === key)
        return true;

      current = current.next;
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    const bucket = this.array[hashCode];

    let current = bucket.head;

    if(!current)
      return false;

    if (current.key === key) {
      bucket.removeAt(0);
      return true;
    }

    while (current && current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return true;
      }

      current = current.next;
    }
    return false;
  }

  length() {
    return this.array.reduce((acc, cur) => {
      acc += cur.size();
      return acc;
    }, 0)
  }

  clear() {
    this.array = Array.from({ length: this.capacity }, () => new LinkedList());
    return this.array;
  }

  keys() {
    return this.array.reduce((acc, bucket) => {
      let current = bucket.head;

      while(current) {
        acc.push(current.key);
        current = current.next;
      }

    return acc;
    }, [])
  }

  values() {
    return this.array.reduce((acc, bucket) => {
      let current = bucket.head;

      while(current) {
        acc.push(current.value);
        current = current.next;
      }

    return acc;
    }, [])
  }

  entries() {
    return this.array.reduce((acc, bucket) => {
      let current = bucket.head;

      while(current) {
        acc.push([current.key, current.value]);
        current = current.next;
      }

    return acc;
    }, [])
  }
}

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver');


console.log(test);
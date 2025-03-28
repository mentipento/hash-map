// hash-map.js

import LinkedList from "./linked-list.js";

class HashMap {

  constructor(loadFactor = 0.8, capacity = 16) {

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
    let bucket = this.array[hashCode];

    let current = bucket.head;

    while(current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
        current = current.next;
    }

    bucket.append(key, value);
    return;
  }

}


const newHashMap = new HashMap();
newHashMap.set('Peter', 'Fox');
newHashMap.set('Michael', 'Bane');
newHashMap.set('Ira', 'Leen');
newHashMap.set('Peter', 'Newman')
console.log(newHashMap.array);
console.log(newHashMap.array[0].toString())


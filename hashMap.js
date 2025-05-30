class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}
export class hashMap {
    loadFactor = 0.75
    capacity = 16
    occupied = 0
    buckets = new Array(this.capacity).fill(null)
    hash(key) { 
        let hashCode = 0
        const primeNumber = 31
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode % this.capacity
    }
    resize() {
        this.capacity *= 2
        this.loadFactor -= 0.5
        let oldBuckets = []
        this.buckets.forEach(i => {
            if(i != null) {
                oldBuckets.push(i)
            }
        })
        this.buckets = new Array(this.capacity).fill(null)
        oldBuckets.forEach(i => {
            let index = this.hash(i.key)
            if(this.buckets[index] != null) {
                let nIndex = null
                for(let j = index + 1; j < this.capacity; j++) {
                    if(this.buckets[j] == null) {
                        nIndex = j
                        break
                    }
                }
                if(nIndex == null) {
                    for(let j = index - 1; j < this.capacity; j--) {
                        if(this.buckets[j] == null) {
                            nIndex = j
                            break
                        }
                    }
                }
                if(nIndex == null) {
                    for(let j = 0; j < this.capacity; j++) {
                        if(this.buckets[j] == null) {
                            nIndex = j
                            break
                        }
                    }
                }
                this.buckets[nIndex] = new Node(i.key, i.value)
            }else {
                this.buckets[index] = new Node(i.key, i.value)
            }
        })
    }
    set(key, value) {
        if(this.occupied >= parseInt(this.capacity * this.loadFactor)) {
            this.resize()
        }
        let index = this.hash(key)
        if(this.buckets[index] != null) {
            if(this.buckets[index].key === key) {
                this.buckets[index].value = value
            }else {
                let nIndex = null
                for(let i = index + 1; i < this.capacity; i++) {
                    if(this.buckets[i] == null) {
                        nIndex = i
                        break
                    }
                }
                if(nIndex == null) {
                    for(let i = index - 1; i >= 0; i--) {
                        if(this.buckets[i] == null) {
                            nIndex = i
                            break
                        }
                    }
                }
                if(nIndex == null) {
                    for(let i = 0; i < this.capacity; i++) {
                        if(this.buckets[i] == null) {
                            nIndex = i
                            break
                        }
                    }
                }
                this.buckets[nIndex] = new Node(key, value)
                this.occupied += 1
            }
        }else {
            this.buckets[index] = new Node(key, value)
            this.occupied += 1
        }
    }
    get(key) {
        let index = this.hash(key)
        if(this.buckets[index] == null) {
            return null
        }
        if(this.buckets[index].key == key) {
            return this.buckets[index].value
        }else {
            this.buckets.forEach(i => {
                if(i.key == key) {
                    return i.key
                }
            })
        }
        return null
    }
    has(key) {
        let index = this.hash(key)
        if(this.buckets[index] == null) {
            return false
        }
        if(this.buckets[index].key == key) {
            return true
        }else {
            this.buckets.forEach(i => {
                if(i.key == key) {
                    return true
                }
            })
        }
        return false
    }
    remove(key) {
        let index = this.hash(key)
        if(this.buckets[index] == null) {
            return false
        }
        if(this.buckets[index].key == key) {
            this.buckets[index] = null
            this.occupied -= 1
            return true
        }else {
            this.buckets.forEach(i => {
                if(i.key == key) {
                    i = null
                    this.occupied -= 1
                    return true
                }
            })
        }
        return false
    }
    length() {
        return this.occupied
    }
    clear() {
        this.buckets.fill(null)
        this.occupied = 0
    }
    keys() {
        let arrayOfKeys = []
        this.buckets.forEach(i => {
            if(i != null) {
                arrayOfKeys.push(i.key)
            }
        })
        return arrayOfKeys
    }
    values() {
        let arrayOfValues = []
        this.buckets.forEach(i => {
            if(i != null) {
                arrayOfValues.push(i.value)
            }
        })

        return arrayOfValues
    }
    entries() {
        let arrayOfEntries = []
        this.buckets.forEach(i => {
            if(i != null) {
                arrayOfEntries.push([i.key, i.value])
            }
        })
        return arrayOfEntries
    }
}
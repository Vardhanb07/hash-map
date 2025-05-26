class hashMap {
    #loadFactor = 0.8
    #capacity = 16
    #map = []
    #hash(key){
        let hashCode = 0
        const primeNumber = 31
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode
    }
    set(key, value){
        let hashCode = this.#hash(key)
        let isChange = false
        for(let j of this.#map){
            if(j[0] === hashCode){
                j[1] = value
                isChange = true
            }
        }
        if(!isChange){
            this.#map.push([hashCode, value])
        }
    }
    get(key){
        let hashCode = this.#hash(key)
        let value = null
        for(let j of this.#map){
            if(j[0] == hashCode){
                value = j[1]
            }
        }
        return value
    }
    has(key){
        let hashCode = this.#hash(key)
        let keyContains = false
        for(let j of this.#map){
            if(j[0] == hashCode) keyContains = true
        }
        return keyContains
    }
    remove(key){
        let hashCode = this.#hash(key)
        for(let j = 0; j < this.#map.length; j++){
            if(this.#map[j][0] == hashCode){
                this.#map.splice(j,1)
                return true
            }
        }
        return false
    }
    length(){
        return this.#map.length
    }
    clear(){
        this.#map.splice(0, this.#map.length)
    }
    keys(){
        let arrayOfKeys = []
        for(let j of this.#map){
            arrayOfKeys.push(j[0])
        }
        return arrayOfKeys
    }
    values(){
        let arrayOfValues = []
        for(let j of this.#map){
            arrayOfValues.push(j[1])
        }
    }
    entries() {
        return this.#map
    }
}
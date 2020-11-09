class RandomizedCollection {
  constructor () {
    this.nums = []
    this.map = new Map()
  }

  insert (val) {
    if (!this.map.has(val)) {
      this.map.set(val, new Set())
    }
    this.map.get(val).add(this.nums.length)
    this.nums.push(val)
    return this.map.get(val).size === 1
  }

  remove (val) {
    if (!this.map.has(val)) {
      return false
    }
    const index = this.map.get(val).keys().next().value
    this.map.get(val).delete(index)
    if (!this.map.get(val).size) {
      this.map.delete(val)
    }
    this.nums[index]=this.nums[this.nums.length-1]
    this.nums.pop()
    if (!this.map.has(this.nums[index])) {
      this.map.set(this.nums[index], new Set())
    }
    this.map.get(this.nums[index]).delete(this.nums.length)
    this.map.get(this.nums[index]).add(index)
    return true
  }

  getRandom () {
    return this.nums[Math.floor(Math.random() * this.nums.length)]
  }
}

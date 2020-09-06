class DLinkedNode {
  key: number
  value: number
  prev!: DLinkedNode
  next!: DLinkedNode

  constructor (key: number, value: number) {
    this.key = key
    this.value = value
  }
}

class LRUCache {
  capacity: number
  size: number
  cache: Map<number, DLinkedNode>
  dummyHead: DLinkedNode
  dummyTail: DLinkedNode

  constructor (capacity: number) {
    this.size = 0
    this.capacity = capacity
    this.cache = new Map()
    this.dummyHead = new DLinkedNode(0, 0)
    this.dummyTail = new DLinkedNode(0, 0)
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get (key: number): number {
    const node = this.cache.get(key)
    if (!node) return -1
    this.moveToHead(node)
    return node.value
  }

  put (key: number, value: number): void {
    const node = this.cache.get(key)
    if (!node) {
      const newNode = new DLinkedNode(key, value)
      this.cache.set(key, newNode)
      this.addToHead(newNode)
      this.size++
      if (this.size > this.capacity) {
        this.dummyTail = this.removeTail()
        this.cache.delete(this.dummyTail.key)
        this.size--
      }
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  private moveToHead (node: DLinkedNode) {
    this.removeNode(node)
    this.addToHead(node)
  }

  private removeNode (node: DLinkedNode) {
    node.prev.next = node.next
    if (node.next) node.next.prev = node.prev // why judge
  }

  private addToHead (node: DLinkedNode) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  private removeTail (): DLinkedNode {
    const ret = this.dummyTail.prev
    this.removeNode(this.dummyTail)
    return ret
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Queue:
    def __init__(self):
        self.items = []
        self.ind = 0  
    def enqueue(self, item):
        self.items.append(item)
    def dequeue(self):
        if self.is_empty():
            return "IS empty"
        item = self.items[self.ind]
        self.ind += 1  
        return item
    def peek(self):
        if self.is_empty():
            return "IS empty"
        return self.items[self.ind]
    def is_empty(self):
        return self.ind >= len(self.items)
    def size(self):
        return len(self.items) - self.ind
q = Queue()
q.enqueue("First")
q.enqueue("SEcond")
q.enqueue("Third")
print(q.dequeue())  
print(q.dequeue())  
print(q.peek()) 
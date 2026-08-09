# 1. FIFO
# class Queue:
#     def __init__(self):
#         self.items = []
#         self.ind = 0  
#     def enqueue(self, item):
#         self.items.append(item)
#     def dequeue(self):
#         if self.is_empty():
#             return "IS empty"
#         item = self.items[self.ind]
#         self.ind += 1  
#         return item
#     def peek(self):
#         if self.is_empty():
#             return "IS empty"
#         return self.items[self.ind]
#     def is_empty(self):
#         return self.ind >= len(self.items)
#     def size(self):
#         return len(self.items) - self.ind
# queue = Queue()
# queue.enqueue("First")
# queue.enqueue("SEcond")
# queue.enqueue("Third")
# print(queue.dequeue())  
# print(queue.dequeue())  
# print(queue.peek()) 
# print(queue.size())


# 2. LINKEDLIST
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=", ")
            current = current.next
        print("None")
linkedlist = LinkedList()
linkedlist.prepend(30)
linkedlist.prepend(20)
linkedlist.prepend(10)
linkedlist.print_list()  


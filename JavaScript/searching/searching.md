# Searching

## Linear search

- go through all items, one by one
- time complexity
  - best = O(1)
  - worst = O(n)
- unsuitable for large data

### In JS

```
array.indexOf(item);

array.findIndex(function(item) {
    return item === desiredItem; // return index in array
})

array.find(function(item) {
    return item === desiredItem; // returns item
})

array.includes(item); // returns boolean
```

## Binary search

- for sorted lists
- start at the middle and discard the half that is smaller / bigger than desired item
- repeat until found
- time complexity = O(log n)

## Graph & Tree traversals

- visiting every node in a tree
- time complexity = O(n)
- can be done through Breadth first search (BFS) & Depth first search (DFS)

## BFS

- start at root
- move left to right over each level

## DFS

- start at root
- follow one branch until leaf node
- once reached, go back to ancestor and search its children until leaf

## BFS vs. DFS

- time complexity of both = O(n)
- BFS:
  - find shortest path
  - closer nodes
  - but needs more memory
- DFS:
  - less memory
  - does path exist?
  - but can get slow

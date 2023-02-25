# Sorting

- critical for big inputs / large datasets
- sorting can become very expensive

## Issues with `sort()`

- JS sort converts numbers to string
- does not recognize charaters in other languages per se
- time and space complexity cannot be guaranteed (depends on implementation / browser)
- JS sort accepts function to adjust sorting logic

## Bubble sort (elementary sort)

- bubbling up numbers
- compares 2 adjacent numbers at a time
- one of the least efficient
- not used in reality

## Selection sort (elementary)

- scan list for smallest item
- excahnge item with first item
- not used in reality

## Insertion sort (elementary)

- efficient for lists that are almost sorted

## Merge sort (complex sort)

- time complexity = O(n log n)
- space complexity = O(n)
- uses divide and conquer (divides in the middle)
- "stable" = keeps order of equal elements

## Quick sort

- divide and conquer algorithm
- uses pivoting technique
  - sort all elements smaller to left, all greater to right
  - sort all smaller elements among them -> might require pivoting
  - sort all greater alements among them -> might require pivoting
  - re-esemble
- worst case = O(nˆ2) time complexity
- space complexity = O(n log n)

## Non-comparison sort

- counting sort (fixed length integers)
- radix sort (fixed length integers)

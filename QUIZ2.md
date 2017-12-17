React Counter Quiz
===

## Main Quiz

* Open book
* Submit as normal lab assignment from this repo
* Time Limit **50 minutes**

## Bonus Quiz

Worth an addtional **20pts** towards "quiz" portion of overall grade. You might want to read through the testing 
section before you start the main quiz, it may change how you choose to implement your counter.

* **Additional** 50 minute time limit
* Complete the testing requireements listed below

## App

Using `create-react-app`, create a counter app:

![image](https://user-images.githubusercontent.com/478864/29787788-0bbe70d4-8be5-11e7-8021-f74e317f4406.png)

* When the right `+` button is clicked, the count increments.
* When the left `-` button is clicked, the count decrements.
* When the count is 0, the left button should be disabled:

![image](https://user-images.githubusercontent.com/478864/29787853-56fa8452-8be5-11e7-9810-1c32d940c704.png)

You may style the app however you choose.

## Testing

Choose one of two set of tests to complete:

### 1) Snapshot tests

Snapshot tests that cover the following cases:

1. Render with a positive count
2. Render with a zero count

The intent is to capture the difference in rendering for a normal versus disabled left decrement button.

### 2) Unit test reducer

Write unit tests for your reducer that include tests for:

1. Increment
2. Decrement

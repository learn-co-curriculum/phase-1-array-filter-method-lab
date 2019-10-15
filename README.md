# Iterator Drill: Filter

## Learning Goals

* Define how the `filter()` method works
* Demonstrate `filter()`
* Use `filter()` to return matching results

## Introduction

We've all probably had the experience of filtering a selection of choices
online. When shopping for clothing, we might have selected a single size so
that we can consider only the search results we need. Or when ordering food
online, we could have customized our results to only show restaurants currently
open or offering delivery in our neighborhoods. Since it's such a common need
for a user, it's also a common function for a web programmer to run.
There are many ways to filter in programming, but the easiest is to use `filter()`.

## Define How the `filter()` Method Works

If you have an array, but only want some of the elements in it--that's where
`filter()` comes in! You can think of `filter()` as a `for` loop that specifically
keeps or filters out certain values from an array. Consider the following code:

```js
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for(var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) even.push(arr[i]);
}
// even = [2,4,6]
```

This code checks all of the values in the array. If the value can be divided by 2, it
is considered an even number. Those values are then pushed onto the even `array`. This
works, but now we have the `filter()` method to achieve the same result much easier.

## Demonstrate `filter()`

The `filter()` method creates a new `Array` with all elements that pass certain tests provided
function. Filter receives the same arguments as `map` (current item, index, and entire array)
in the callback function, and works very similarly. The only difference is that the callback
needs to return either _true_ or _false_. If it returns _true_, the array keeps that element.
If it returns false that element is filtered out.

Here is the earlier example written with `filter()`:

```js
let even = arr.filter(n => {
  return n % 2 === 0;
});
// even = [2,4,6]
```

This code's function _returns_ true if the element can be divided by 2 with no
remainder (i.e. "is even").

## Use `filter()` to Return Matching Results

We have an array of drivers with various information. We need to write methods using the
`filter()` method so that PickMeUp Taxi service employees can easily query the data. Run the
tests to see what conditions need to be met by each function _before_ you start writing
JavaScript code.

You'll be writing three functions:

### Write a Function To Case-insensitively Match `string`s

Write `findMatching`- This function takes an array of `drivers` and a `string`
as arguments, and returns the matching list of drivers. The function should be
case insensitive.

### Write a Function To Partially Match Substrings

Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
as arguments for querying the array, and returns all drivers whose names begin
with the provided letters.

### Write a Function To Match `object` Values To a Provided `string`

Write `matchName` - This function takes an array of `drivers` and a `string` as
arguments. In this function, each element of the `drivers` array is a
JavaScript object that has a property of `name`. The function should return
each element whose `name` property matches the provided `string` argument.

## Conclusion

The `filter()` method returns a new array created from all elements in the original array
that meet certain conditions. When we use methods like `filter()`, we work directly with
the current value, instead of accessing it through an index (i.e `array[i]`), avoid mutation
of the original array (minimizing side-effects), and there's no need to manage a `for`
loop with an empty array to push values into.

## Resources
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

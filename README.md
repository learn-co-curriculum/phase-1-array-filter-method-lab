# Iterator Drill: Find

## Learning Goals

* Define how the `filter()` method works
* Demonstrate `filter`

## Introduction

Filtering is a very common function of programming that we've all utilized at
some point in our lives. When shopping for clothing online, chances are, we've
filtered by sizes, so we can weed out the clothing that we definitely can't fit
into, and browse through what caters to our needs. If you've ever ordered food
online, chances are, we've all filtered by what's open right now, and what's
available for delivery in your neighborhood--filtering out results for restaurants
that don't deliver to your address. It is a very common action to need to perform.
This used to be quite annoying to do manually, but now there is no need to fret--
`filter` is here to help!

## 

You can think of `filter` as a for loop that specifically keeps or filters out
certain values from an array. Consider the following code:

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
works, but now we have the `filter` method to achieve the same result much easier.

## Demonstrate `filter`

Filter is similar to map. If you know `map`, you know `filter`! Filter receives the
same arguments as map, and works very similarly. The only difference is that the
callback needs to return either _true_ or _false_. If it returns _true_, the array
keeps that element. If it returns false that element is filtered out.

Here is the earlier example written with `filter`:

```js
let even = arr.filter(n => {
  return n % 2 === 0;
});
// even = [2,4,6]
```

This code's function _returns_ true if the element can be divided by 2 with no
remainder (i.e. "is even").

## Conclusion

The `filter` method returns a new array created from all elements in the original array
that meet certain conditions. When we use methods like `filter`, we work directly with
the current value, instead of accessing it through an index (i.e array[i]), avoid mutation
of the original array (minimizing side-effects), and there's no need to manage a `for`
loop with an empty array to push values into.


## Resources
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
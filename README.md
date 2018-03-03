# Refactoring Koans

*JavaScript edition*

## Setting up

First, clone this repository:

```bash
$ git clone https://github.com/waterlink/refactoring-koans-js
```

Make sure you have a recent version of `node` and `npm` installed.

Then, install the dependencies (only for running tests):

```bash
$ npm install
```

## Run the Koans (tests)

```bash
$ npm test
```

## Meditate on Koans

Go through directories/files in the order of their numbers (digits in front of the directory/file names).

Familiarize yourself with the code in non-spec file `*.js` (without `.spec.`).

Then switch to the Koan (test) file `*.spec.js`. You’ll see that the first few tests are just checking that the program works.

Then you’ll see a bunch of `xdescribe(…)` blocks. These are the pending Koans (tests).

Go through them in order, one-by-one, top-to-bottom. To start solving a Koan, remove the `x` in front of `describe`, so it reads `describe(…)`.

Once the test is passing, you can move to the next `xdescribe`. Make sure to read the descriptions of these `xdescribe`s and their respective `it`s, you can find a clue there.

## Notes

The code is in simple NodeJS, without any transpilers.

While this is still a work in progress, feedback from you would be fantastic! You can do it in the issues, or [on Twitter](https://twitter.com/waterlink000).

Finally, if you liked these koans, make sure to share it with your friends and following on social media!

# CA660 Cheat Sheet -> David O'Regan

## Permutations && Combinations -> Example && R

### Permutation - Order matters(Safe Lock)

#### R Function(perm)

```r
perm = function(n, x) {
  return(factorial(n) / factorial(n-x))
}
```

#### Examples

+ If passwords can consist of six letters, find the probability that a randomly chosen password will not have any repeated letters.

  (26 x 25 x 24 x 23 x 22 x 21) / 26^6 = 0.5366045

  ```r
  perm(26, 6)/26^6 = 0.5366045
  ```

+ A sample of size 10 is chosen at random from a class of 100 consisting of 60 females and 40 males. Obtain the probability of getting 10 females.

  ```r
  perm(60, 10)/perm(100, 10) = 0.004355441
  ```

+ A box with 15 IC chips contains 5 defective chips. If a sample of three chips is drawn at random without replacement, what is the probability that all the three are defective?

  ```r
  perm(5, 3)/perm(15, 3) = 0.02197802
  ```

+ A batch of 50 semiconductors contains 10 that are defective. Two are selected at random, without replacement.
  + (a) What is the probability that the first one selected is defective?
  ```r
  perm(10, 1)/perm(50, 1)
  ```

  + (b) What is the probability that the second one selected is defective?
  ```r
  perm(9, 1)/perm(49, 1)
  ```

  + (c) What is the probability that both are defective?
  ```r
  perm(10, 2)/perm(50, 2)
  ```

  + (d) How would the probability in (b) change if the chips selected were replaced before the next selection?
  ```r
  perm(10, 1)/perm(50, 1)
  ```

+ In a party of five students, compute the probability that at least two have the same birthday (month/day), assuming a 365-day year.

```r
prod(365:(365-5+1))/365^5 #All 5 have different Bday
1 - prod(365:(365-5+1))/365^5 #2 have same Bday
```

+The probability that two students in a class have the same birthday is at least 75%. What is the minimum size of the class?

```r
1 - prod(365:(365-k+1))/365^k >= 75% #guess, average class size between 20 && 40
1 - prod(365:(365-32+1))/365^32 = 0.7533475
```

+ A series of 20 jobs arrive at a computing center with 50 processors. Assume that each of the jobs is equally likely to go through any of the processors.

  + (a) Find the probability that a processor is used at least twice.
  ```r
  perm(50, 20)/50^20 #All different
  1 - perm(50, 20)/50^20 #At least twice
  ```

  + What is the probability that at least one processor is idle? This is equivalent to the probability that at least one is used twice
  ```r
  perm(50, 20)/50^20 #All occupided
  1 - perm(50, 20)/50^20 #At least one idle because two are being used
  ```

+ Simulate the allocation problem in the previous exercise a large number of times, and estimate how many times the most used processor was used

```r
freq <- 0

for(i in 1000) {
  x <-sample(seq(1:50), 20, replace = T) #samples 20 from 50 with replacement
  freq[i] <- max(table(x)) # obtains the max no of uses of proc in a sample.
}

table(freq) #tabluates the multiple uses of processors
freq
```

+ Recall that in Example 4.19 we calculated that 431 or more processors are needed to be at least 90% sure that no processor will receive more than one of the 10 jobs to be allocated. You will agree that this appears excessively large. To assure that the answer is correct, simulate the experiment a large number of times and record the usage patterns of the processors.

```r
s <- 0

for(i in 1:10000) {
  x <-sample(seq(1:431), 10, replace = T) #samples 10 from 431 with replacement
  y <- unique (x) #unique numbers in x
  diff <- 10 - length(y) # number of repeats in x
  if (diff) {
    s = s
  } else {
    s = s+1 #if diff = 0 (no repeats) s = s+1, if diff is not equal to 0 s remains the same
  }
}

s # number of samples with no repeats
s/10000 # proportion of samples with no repeats
```

+ Calculate a head is 0.5 if a fair coin is tossed repeatedly;

```r
x <- sample(c('H','T'), 1000, replace=T) #samples H or T 1000 times with replacement
table(x)
table(x)/1000
```

+ a red card is 0.5 if cards are drawn repeatedly with replacement from a well-shuffled deck;

```r
x <- sample(c('R', 'B'), 1000, replace=T) #samples R or B 1000 times with replacement
table(x)
table(x)/1000
```

+ an even number is 0.5 if a fair die is rolled repeatedly

```r
x <- sample(c('E', 'O'), 1000, replace=T) #samples E or O 1000 times with replacement
table(x)
table(x)/1000

Or

x <- sample(seq(1:6), 1000, replace=T) #samples 1 to 6 1000 times with replacement
table(x)
table(x)/1000
```

+ An experiment consists of tossing two fair coins. Use R to simulate this experiment 100 times and obtain the relative frequency of each possible outcome.

```r
freq <- 0

for(i in 1:100) {
  freq[i] <- sample(c('H','T'), 1)
}

table(x)
table(x)/1000
```

+ An experiment consists of tossing a die. Use R to simulate this experiment 600 times and obtain the relative frequency of each possible outcome. Hence, estimate the probability of getting each of 1, 2, 3, 4, 5, and 6.

```r
freq <- 0

for(i in 1:600) {
  freq[i] <- sample(c('1','2','3','4','5','6'), 1)
}

table(freq)
table(freq)/1000
```

#### With reptition(perm)

#### Without reptition(perm)

### Combination - Order does not matter(fruit salad)

#### R Function(comb)

```r
comb = function(n, x) {
  return(factorial(n) / (factorial(x) * factorial(n-x)))
}
```

#### With reptition(comb)

#### Without reptition(comb)

## Bayesian Networks

### Example

## Axom of probability

### Axom One

### Axom Two

## Hidden Markov Chain

## Normal Distribution

## Mean and Variance -> Example && R

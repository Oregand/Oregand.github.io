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

+ Amy and Jane are gambling against one another. A fair coin is tossed repeatedly. Each time a head comes up, Amy wins two euros from Jane, and each time a tail comes up, Amy loses 2 euros to Jane. Use R to simulate this game 100 times

  + (a) the number of times that Amy is ahead in these 100 tosses:
  ```r
  freq <- 0

  for(i in 1:100) {
    freq[i] <- sample(c('A','J'), 1)
  }

  table(freq) =  A  J  / 51 49
  ```

  + (b) how much Amy has won or lost:
  ```r
  freq[0] x 2
  ```

+ While plotting, we used type = o in the plot command, which joined the points. Alternative characterizations of a plot may be obtained by using different op- tions. Explore the possibilities of different types of plots by varying the Type symbols

```r
num <- 1:100
plot(num, add, type = "o", xlab = "Toss number", ylab = "Winnings")
plot(num, add, type = "l", xlab = "Toss number", ylab = "Winnings")
plot(num, add, type = "s", xlab = "Toss number", ylab = "Winnings")
plot(num, add, type = "S", xlab = "Toss number", ylab = "Winnings")
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

*P(A) measures our certainty about statement A.*

```js
P(A) = 1 if we are certain A is true
P(A) = 0 if we are certain A is false
P(A) has a value in between 0 and 1 if we are in some doubt

P(A|B) = The probability that A is true given that B is true
```

### Example

In a certain clinic 0.15 of the patients have a certain virus. Suppose a blood test is carried out on a patient. If the patient has got the virus the test will turn out positive with probability 0.95. If the patient does not have the virus the test will turn out positive with probability 0.02.

H = the patient has got the virus
P = the outcome of the test is positive

The question above gives us the following information.

1.P(H) = 0.15
2.P(P|H) = 0.95
3.P(P|!H) = 0.02

And we are asked to find the following

1.P(H|P)
2.P(!H|P)
3.P(H|!P)
4.P(!H|!P)

+ `P(H|P) = P(P|H) * P(H) / P(P)`
  + `P(H|P) = 0.95 * 0.15 / ?`

P(P) = Positive test:

Two possible senarios for a positve test:

+ Test positive, paitent has virus = P ^ H
+ Test positive, paitent does not have virus = P ^ !H

```r
P(P) = (P ^ H) + P(P ^ !H)

P(P ^ H) = P(P|H)P(H)
P(P ^ !H) = P(P|!H)P(!H)

P(P ^ H) = 0.95 *  0.15
P(P ^ !H) = 0.02 * 0.85

P(P) = 0.95 *  0.15 + 0.02 * 0.85 = 0.1595

P(H|P) = 0.95 * 0.15 / 0.1595 = 0.8934
```

+`P(!H|P) = 1 - P(H|P)`
  +`P(!H|P) = 1 - 0.8934 =  0.1066`

```r
P(H|!P) = P(!P|H) * P(H) / P(!P)

P(H|!P) = (1 - P(P|H)) * 0.15 / (1 - P(P))
P(H|!P) = (1 - 0.95) * 0.15 / (1 - 0.1595) = 0.008923
```

+`P(!H|!P) = 1 - P(H|!P)`
  +`1- 0.008923 = 0.99107`

### Example(Multi Events -> Independant)

## Axom of probability

### Axom One

`P(A) + P(!A) = 1`

The probability that A is true and the probability that A is not true must add up to 1.

### Axom Two

`P(A ^ B) = P(A|B)P(B)`

The probability that A and B are both true equals the probability that B is true multiplied by the probability of A given B.

`P(A|B) = P(A ^ B) / P(B)`

From this we are able to make Bayes Therom:

`P(A|B)P(B) = P(B|A)P(A)`

## Hidden Markov Chain

### Example In R(HMM)

Five separate market regime periods will be simulated and "stitched" together in R. The subsequent stream of returns will then be utilised by a Hidden Markov Model in order to infer posterior probabilities of the regime states, given the sequence of observations.

The first task is to install the depmixS4 and quantmod libraries and then import them into R. The random seed will also be fixed in order to allow consistent replication of results:

```r
install.packages('depmixS4')
install.packages('quantmod')
library('depmixS4')
library('quantmod')
set.seed(1)
```

At this stage a two-regime market will be simulated. This is achieved by assuming market returns are normally distributed. Separate regimes will be simulated with each containing NkNk days of returns. Each of the kk regimes will be bullish or bearish. The goal of the Hidden Markov Model will be to identify when the regime has switched from bullish to bearish and vice versa.

In this example k=5k=5 and Nk∈[50,150]Nk∈[50,150]. The bull market is distributed as N(0.1,0.1) while the bear market is distributed as N(−0.05,0.2). 

The parameters are set via the following code:

```r
# Create the parameters for the bull and
# bear market returns distributions
Nk_lower <- 50
Nk_upper <- 150
bull_mean <- 0.1
bull_var <- 0.1
bear_mean <- -0.05
bear_var <- 0.2
```

The N^k values are randomly chosen:

```r
# Create the list of durations (in days) for each regime
days <- replicate(5, sample(Nk_lower:Nk_upper, 1))
```

The returns for each `kth` period are randomly drawn:

```r
# Create the various bull and bear markets returns
market_bull_1 <- rnorm( days[1], bull_mean, bull_var ) 
market_bear_2 <- rnorm( days[2], bear_mean, bear_var ) 
market_bull_3 <- rnorm( days[3], bull_mean, bull_var ) 
market_bear_4 <- rnorm( days[4], bear_mean, bear_var ) 
market_bull_5 <- rnorm( days[5], bull_mean, bull_var ) 
```

The R code for creating the true regime states (either 1 for bullish or 2 for bearish) and final list of returns is given by the following:

```r
# Create the list of true regime states and full returns list
true_regimes <- c( rep(1,days[1]), rep(2,days[2]), rep(1,days[3]), rep(2,days[4]), rep(1,days[5]))
returns <- c( market_bull_1, market_bear_2, market_bull_3, market_bear_4, market_bull_5)
```

Plotting the returns shows the clear changes in mean and variance between the regime switches:

```r
plot(returns, type="l", xlab='', ylab="Returns")
```

At this stage the Hidden Markov Model can be specified and fit using the Expectation Maximisation algorithm, the details of which are beyond the scope of this article. The family of distributions is specified as gaussian and the number of states is set to two (nstates = 2):

```r
# Create and fit the Hidden Markov Model
hmm <- depmix(returns ~ 1, family = gaussian(), nstates = 2, data=data.frame(returns=returns))
hmmfit <- fit(hmm, verbose = FALSE)
```

Subsequent to model fitting it is possible to plot the posterior probabilities of being in a particular regime state. post_probs contain the posterior probabilities. These are compared with the underlying true states. Notice that the Hidden Markov Model does a good job of correctly identifying regimes, albeit with some lag:

```r
# Output both the true regimes and the 
# posterior probabilities of the regimes
post_probs <- posterior(hmmfit)
layout(1:2)
plot(post_probs$state, type='s', main='True Regimes', xlab='', ylab='Regime')
matplot(post_probs[,-1], type='l', main='Regime Posterior Probabilities', ylab='Probability')
legend(x='topright', c('Bull','Bear'), fill=1:2, bty='n')
```

## Normal Distribution


## Mean and Variance -> Example && R

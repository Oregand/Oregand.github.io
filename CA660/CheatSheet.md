# CA660 Cheat Sheet -> David O'Regan

## Basic Concepts of probability:

```r
P(A ^ B) = Probability of A 'and' B
P(A or B) =  Probability of A 'or' B
P(A|B) =  Probability of A 'given' B
```

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

```r
+ P(H) = 0.15
+ P(P|H) = 0.95
+ P(P|!H) = 0.02
```

And we are asked to find the following

```r
+ P(H|P)
+ P(!H|P)
+ P(H|!P)
+ P(!H|!P)
```

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

+ `P(!H|P) = 1 - P(H|P)`
  + `P(!H|P) = 1 - 0.8934 =  0.1066`

```r
P(H|!P) = P(!P|H) * P(H) / P(!P)

P(H|!P) = (1 - P(P|H)) * 0.15 / (1 - P(P))
P(H|!P) = (1 - 0.95) * 0.15 / (1 - 0.1595) = 0.008923
```

+ `P(!H|!P) = 1 - P(H|!P)`
  + `1- 0.008923 = 0.99107`

### Example(Multi Events -> Independant)

*Suppose both P1 and P2 are positive. What then is the probability that the patient has the virus? In other words we are asked to find P(H|P1 ^ P2)*

```r
P(P1 ^ P2) = P(P2 ^ P1|H) * P(H) / P(P1 ^ P2)
P(P1 ^ P2) = ? * 0.15 / ?

P(P2 ^ P1|H) = Independant events, so:

P(P2 ^ P1|H) = P(P1|H) * P(P2|H) = 0.95 * 0.95

P(P1 ^ P2) = Two different senarios:

1. Both tests positive, has virus
2, Both tests positive, does not have virus

P(P1 ^ P2) = P(P1|H) * P(P2|H) * P(H) + P(P1|!H) * P(P2|!H) * P(!H)

= 0.95 × 0.95 × 0.15 + 0.02× 0.02 × 0.85
= 0.135715

P(P1 ^ P2) = P(P2 ^ P1|H) * P(H) / P(P1 ^ P2)
P(P1 ^ P2) = 0.95 * 0.95 * 0.15 / 0.135715
```

*Now lets consider the case where one of the tests is postive and the other is negative. P(H|P1 ^ !P2)*

```r
P(H|P1 ^ !P2) = P(P1^!P2|H) * P(H) / P(P1^!P2)
P(H|P1 ^ !P2) = ? * 0.15 / ?

P(P1^!P2|H) = P(P1|H) * P(!P2|H) = 0.95 * 0.05

P(P1^!P2) = Two different senarios:

1. One pos, one neg, has virus
2. One pos, one neg, does not have virus

P(P1^!P2) = P(P1 ^ !P2|H) * P(H) + P(P1 ^ !P2|!H) * P(!H)

P(P1^!P2) = P(P1|H) * P(!P2|H) * P(H) + P(P1|!H) * P(!P2|!H) * P(!H)
= 0.95 × 0.05 × 0.15 + 0.02 × 0.98 × 0.85
= 0.023785

P(H|P1 ^ !P2) = P(P1^!P2|H) * P(H) / P(P1^!P2)
P(H|P1 ^ !P2) = 0.95 * 0.05 * 0.15 / 0.023785
```

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

#### Two different events

```r
P(P2 ^ P1|H) # P1 and P2 given H
P(P2 ^ P1) # P1 and P2 regardless of the value of H

#Joined prob = probability of both events given H
P(P2 ^ P1|H) = P(P1|H) * P(P2|H)


P(P2 ^ P1) = Has two senarios!

1. P1 ^ P2|!H #both tests positive, has virus
2. P1 ^ P2|H #both tests positive, does not have virus

P(P2 ^ P1) = P(P1 ^ P2|H) * P(H) + P(P1 ^ P2|!H) *P(!H)
P(P2 ^ P1) = P(P1|H) * P(P2|H) * P(H) + P(P1|!H) * P(P2|!H)) *P(!H)
```

## Hidden Markov Model

The general idea of a HMM is easy enough to understand: one observes some time series or stochastic process and imagines that it has been generated by an unobserved or "hidden" *Markov process/chain*.

`Markov Chain – a random process, where we assume the previous state holds predictive power in predicting the next.`

### Car Renatal Example(Markov Chain)

Suppose a car rental agency has three locations in Ottawa: Downtown location, East end location and a West end location. The agency has a group of delivery drivers to serve all three locations. The agency’s statistician has determined the following:

+ Of the calls to the Downtown location, 30% are delivered in Downtown area, 30% are delivered in the East end, and 40% are delivered in the West end.

+ Of the calls to the East end location, 40% are delivered in Downtown area, 40% are delivered in the East end, and 20% are delivered in the West end.

+ Of the calls to the West end location, 50% are delivered in Downtown area, 30% are delivered in the East end, and 20% are delivered in the West end.

+ After making a delivery, a driver goes to the nearest location to make the next delivery. This way, the location of a specific driver is determined only by his or her previous location.

This is a markov chain because the current state has predictive power over the next state. The state space in this example is Downtown, East, and West.

We can model the markov chain by a transition matrix:

```r
rentalStates <- c("Downtown", "East", "West")
rentalTransition <- matrix(c(0.3, 0.3, 0.4,
                           + 0.4, 0.4, 0.2,
                           + 0.5, 0.3, 0.2),
                           + byrow = T, nrow = 3, dimnames = list(rentalStates, rentalStates))
rentalTransition
```

There is a package in R that will make our lives easier. It’s called ‘markovchain’. Let’s define our model as a markovchain object. Calling the object is equivalent to it’s show() method.

We can even access elements of the transition matrix by indexing the object.

```r
mcRental <- new("markovchain", states = rentalStates, byrow = T, 
                transitionMatrix = rentalTransition, name = "Rental Cars")

# We can access the transition matrix just by calling the mc object
mcRental
```

You can also call a specific row of the matrix, using the mcRental object.:

```r
You can also call a specific row of the matrix, using the mcRental object.
mcRental[1]  # the probabilities that we go Downtown, East, and West, given that we are currently Downtown
```

Given that we are downtown, what is the probability being back downtown in exactly 2 trips?

```r
# Given we are downtown, what is the probability we will be downtown in two trips?
# We can go Downtown -> Downtown,
a <- 0.3 * 0.3
# East -> Downtown (note that to we have to get the probability of going Downtown from the East location),
b <- 0.3 * 0.4
# West -> Downtown (same logic here)
c <- 0.4 * 0.5
a + b + c    # The probability that we will be downtown in 2 trips.
```

It turns out though, that you can get the same result by raising the transition matrix to the power n, where n is the number of trips.

```r
mcRental ^ 2
```

This distribution, when the starting location is completely irrelevant, is known as the stationary distribution. It can be calculated with some linear algebra fanciness, but the markovchain package has a method called `steadyStates()`. Here is a question to make use of the method.

At the rental car company there are 70 drivers. Each driver is required to make 30 trips each day—how many drivers will end their day at the West location?

First we need to assure that 30 is sufficiently large, and we can do this by raising the transition matrix to 30 and assuring that there is no difference based on starting location.

After that, we can just multiply the scalar 70 times the stationary distribution, and that will give the vector of expected values.

```r
mcRental ^ 30
70*steadyStates(mcRental)
```

The conditional distribution just pulls out the row of the transition matrix. I love that there is a method called this, because it highlights the fact that markov chains have at their core conditional probability.

The summary function provides a more comprehensive view of the object. Each aspect of it (transient classes, irreducibility) are beyond the scope of this tutorial, but they’re worth noting.

```r
summary(mcRental)
conditionalDistribution(mcRental, "Downtown")
```

### HMM Example In R(Stock Market, Bull Vs Bearish Example. Bullish -> Price goes up, Bearish -> Price goes down)

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

In this example k=5 and Nk∈[50,150]. The bull market is distributed as N(0.1,0.1) while the bear market is distributed as N(−0.05,0.2).

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

### Markov Models Explained

Set of states: `s1, s1....sn`. A proces moves one state to another, generating a sequence of states: `si1, si2.....sin`. `Markov chain property`: Probability of each subsequent state depends only on what was in previous state. `P(s^Ik |s^I1, s^I2......s^Ik-1) = P(s^Ik| s^ik-1)` To define a Markov model, the following probabilities have to be specified: `tranisition porbabilities` and `inital probabilities`

#### Example of Markov Model

Two states: Rain && Dry

+ Tranisiton porbabilies
  + P(R|R) = 0.3
  + P(D|R) = 0.7
  + P(R|D) = 0.2
  + P(D|D) = 0.8
+  Inital porbabiltiies:
  +  P(R) = 0.4
  +  P(D) = 0.6

#### Calculation of sequence probability

+ Calculate probability of sequence of: `P(D,D,R,R)`
  + `P(D,D,R,R)` = `P(D) * P(D,D) * P(R,D) * P(R,R)` = `0.3 * 0.2 * 0.8 * 0.6`

### Hidden Markov Models Explained

Set of states `s1,s2.....sn`. Process moves from one state to another state, creating a sequence of states: `si1, si2,......sin`. Markov chain property: probability of each subsequent state depends only on what was the previous state: `P(s^Ik |s^I1, s^I2......s^Ik-1) = P(s^Ik| s^ik-1)`. Sates are not visible, but each state randomly generates one of M observations(or visible states): `(v1, v2.....vm)`.

+ To define a hidden markov model: the following probabiltiies have to be specified:
  + Matrix of transition probabiltiies
  + Matrix of observation probabilities
  + Vector of intial probabilities

#### Example of Hidden Markov Model

+ Two states : `Low` and `High` atmospheric pressure.
+ Two observations: `Rain` and `Dry`.
+ Transition probabilities:
  + P(‘Low’|‘Low’)=0.3
  + P(‘High’|‘Low’)=0.7
  + P(‘Low’|‘High’)=0.2
  + P(‘High’|‘High’)=0.8

+ Observation probabilities
  + P(‘Rain’|‘Low’)=0.6
  + P(‘Dry’|‘Low’)=0.4
  + P(‘Rain’|‘High’)=0.4
  + P(‘Dry’|‘High’)=0.3

+ Initial probabilities:
  + P(‘Low’)=0.4
  + P(‘High’)=0.6

##### Calculation of observation sequence probability

Suppose we want to calculate a probability of a sequence of observations in our example, {‘Dry’,’Rain’}.

+ Consider all possible hidden state sequences:

`P({‘Dry’,’Rain’} ) = P({‘Dry’,’Rain’} , {‘Low’,’Low’}) + P({‘Dry’,’Rain’} , {‘Low’,’High’}) + P({‘Dry’,’Rain’} , {‘High’,’Low’}) + P({‘Dry’,’Rain’} , {‘High’,’High’})`

`P({‘Dry’,’Rain’} , {‘Low’,’Low’})= P({‘Dry’,’Rain’} | {‘Low’,’Low’}) P({‘Low’,’Low’}) = P(‘Dry’|’Low’)P(‘Rain’|’Low’) P(‘Low’)P(‘Low’|’Low) = 0.4 * 0.4 * 0.6 * 0.4 * 0.3`

## Normal Distribution

*The normal distribution is defined by the following probability density function, where μ is the population mean and σ2 is the variance.*

In particular, the normal distribution with μ = 0 and σ = 1 is called the standard normal distribution, and is denoted as N(0,1).

### Example(Normal Dist R)

1.Assume that the test scores of a college entrance exam fits a normal distribution. Furthermore, the mean test score is 72, and the standard deviation is 15.2. What is the percentage of students scoring 84 or more in the exam?

We apply the function pnorm of the normal distribution with mean 72 and standard deviation 15.2. Since we are looking for the percentage of students scoring higher than 84, we are interested in the upper tail of the normal distribution.

```r
pnorm(84, mean=72, sd=15.2, lower.tail=FALSE)
```

2.From previous records it is known that examination results are normally distributed with mean µ = 45 and the standard deviation σ = 4.

What percentage of students obtain a mark:

• less than 45?

```r
pnorm(45, mean=45, sd=4)
```

• larger than 45?

```r
1 - pnorm(45, mean=45, sd=4)
```

• larger than 50?

```r
1 - pnorm(50, mean=45, sd=4)
```

• between 40 and 50?

```r
pnorm(50, mean=45, sd=4) - pnorm(40, mean=45, sd=4)
```

• greater than 37?

```r
1 - pnorm(37, mean=45, sd=4)
```

3.An analogue signal received at a detector (measured in microvolts), is normally distributed with a mean of 100 and a variance of 256; X ∼ N(100, 16)

• What is the probability that the signal will be less than 120 microvolts, given that it is larger than 110 microvolts?

```r
P(110 < X < 120) = pnorm(120, mean=100, sd=16) - pnorm(110, mean=100, sd=16)

P(X > 110) = 1 - pnorm(110, mean=100, sd=16)

P(X < 120|X > 110) = P(110 < X < 120)/P(X > 110)
```

4.From previous records scores on an aptitude are normally distributed with mean µ = 500 and standard deviation σ = 100 : X ∼ N(500, 100) What is the probability that an individual’s score exceeds 650, given that it exceeds 500?

```r
P(X > 650|X > 500) = P(X > 650)/P(X > 500)

P(X > 650) = 1 - pnorm(650, mean=500, sd=100) = 0.0668072
P(X > 500) = 1 - pnorm(500, mean=500, sd=100) = 0.5

0.5/0.0668072
```

## Mean and Variance -> Example && R

Region =  Ashire Bshire Cshire West Toptown East Toptown South Toptown North Toptown
Wealth =  80     110    110    70           120          90            110
Pop %  =  15     20     20     10           10           10            15

1.What are the mean and variance of the wealth for the whole country?

```r
wealth <- c(80,110,110,70,120,90,110)
pop <- c(15,20,20,10,10,10,15)

mean(wealth)
mean(pop)
var(wealth)
var(pop)
```

## Sample Lab

+ Question: In a certain clinic 0.15 of the patients have a certain virus. Suppose a blood test is carried out on a patient. If the patient has got the virus the test will turn out positive with probability 0.95. If the patient does not have the virus the test will turn out positive with probability 0.02.

```r
P(H) = 0.15
P(H|P) = 0.95
P(!H|P) = 0.02
```

1.Calculate the probability that a patient will have a positive test: `P(P)`


```js
P(P) -> Two cases:

const caseOne = 'Has virus, positive test'; // P(H ^ P)
const caseTwo = 'Does not have virus, positive test'; // P(!H ^ P)

P(P) = P(H ^ P) + P(!H ^ P)

P(H ^ P) //Second Axom of prob = P(H ^ P) = P(H|P)P(H)

P(H ^ P) = P(P|H)P(H)
P(!H ^ P) = P(P|!H)P(!H)

P(P) = P(P|H)P(H) + P(P|!H)P(!H)

P(P) = 0.95 * 0.15 + 0.05 * 0.85 = 0.1595
```

2.Write some R code which simulates the possible outcomes of a blood test.

```r
# runif(1) generates a random number between the values 0.0 and 1.0
#If this random number is <= 0.15 then we can say that 
#the patient has the virus, otherwise the patient does not have the virus.

pos <- 0
if (runif(1) <= 0.15) {
  if (runif(1) <= 0.95) pos[i] = 1 else pos[i] = 0
} else {
  if (runif(1) <= 0.02) pos[i] = 1 else pos[i] = 0
}
table(pos)
```

3.Run this code 100,000 times. How often does the test turn out positive? How close is this to the probability, which you calculated above?

```r
pos <- 0
for(i in 1:100000) {
  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) pos[i] = 1 else pos[i] = 0
  } else {
    if (runif(1) <= 0.02) pos[i] = 1 else pos[i] = 0
  }
}
table(pos)
```

4.Now modify your code to find how often, if the test is positive, that the patient has the virus.

```r
# It uses an array called virus, which is only
# updated when the patient has a positive test
# It stores a 1 if the patient has the virus
# and stores a 0 if they do not
pos = 0
virus = 0
j=1
for (i in 1:100000) {
  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      pos[i] = 1
      virus[j] =1
      j=j+1
    } else pos[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      pos[i] = 1
      virus[j] = 0
      j=j+1
    } else pos[i] = 0
  }
}
table(pos)
length(virus) #this should be equal to the number of positive tests
sum(virus)/length(virus) # this is an estimate of how frequent the patient has the virus
# given they have a positive test
```

5.Run this code 100,000 times. How often does the patient have the virus, if they have a positive test?

```r
# It uses an array called virus, which is only
# updated when the patient has a positive test
# It stores a 1 if the patient has the virus
# and stores a 0 if they do not
pos = 0
virus = 0
j=1
for (i in 1:100000) {
  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      pos[i] = 1
      virus[j] =1
      j=j+1
    } else pos[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      pos[i] = 1
      virus[j] = 0
      j=j+1
    } else pos[i] = 0
  }
}
table(pos)
length(virus) #this should be equal to the number of positive tests
sum(virus)/length(virus) # this is an estimate of how frequent the patient has the virus
# given they have a positive test
```

6.How close is this to the value predicted by Bayes Theorem?

```r
P(H|P) = P(P|H) * P(H) / P(P)
P(H|P) = 0.95 * 0.15 / 0.1595
P(H|P) = 0.8934169
```

7.Now modify the code to include a second blood test on the patient. You can assume that the second test is unaffected by the first test

```r

# It uses an array called virus, which is only
# updated when the patient has a positive test
# It stores a 1 if the patient has the virus
# and stores a 0 if they do not
P1 = 0
P2 = 0
V1 = 0
V2 = 0
j1=1
j2=1
for (i in 1:100000) {
  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      P1[i] = 1
      V1[j1] =1
      j1=j1+1
    } else P1[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      P1[i] = 1
      V1[j1] = 0
      j1=j1+1
    } else P1[i] = 0
  }

  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      P2[i] = 1
      V2[j2] =1
      j2=j2+1
    } else P2[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      P2[i] = 1
      V2[j2] = 0
      j2=j2+1
    } else P2[i] = 0
  }
}
table(P1)
table(P2)
length(V1) #this should be equal to the number of positive tests
length(V2) #this should be equal to the number of positive tests
sum(V1)/length(V1) # this is an estimate of how frequent the patient has the virus
sum(V2)/length(V2) # this is an estimate of how frequent the patient has the virus
# given they have a positive test

```

8.Run the code 100,000 times. How often do you get two positive tests? If you get two positive tests, how often does the patient have the virus?

`[1] 0.8949213`

## Sample Lab Two -> Bayes Network

*Pro TIP! If you see the word `given` used, default to Bayes Therom*

### Question 1

Suppose you are given the following facts about heart disease. Either smoking or bad diet or both can make heart disease more likely. Heart disease can produce either or both of the following two symptoms: high blood pressure and an abnormal electrocardiogram.

Draw the Bayesian Network to represent these relations. Use the following symbols S = smoking, D = bad diet, H = heart disease, B = high blood pressure, E = abnormal electrocardiogram

Suppose a medical survey gives you the following data.

`P(S) = 0.3 P(D) = 0.4`

```r
P(H| S,D) = 0.8
P(H| !S,D) = 0.5
P(H| S,!D) = 0.4
P(H| !S,!D) = 0.1

P(B|H) = 0.7
P(E|H) = 0.8
P(B|!H) = 0.1
P(E|!H) = 0.1
```

a)

1.Whats the probability of heart disease?

`P(H)`

*H depends on S && D, so we must add up all probabilities of their states*

```r
P(H) = P(H| S,D) * P(S) * P(D) + P(H| !S,D) *P(!S) * P(D) + P(H| S,!D) * P(S) * P(!D) + P(H| !S,!D) * P(!S) * P(!D)
```

2.High blood pressure

`P(B)`

*B depends on H, so we add up all probabilities of H's state*

```r
P(B) = P(B|H) * P(H) + P(B|!H) * P(!H)
```

3.Heart disease given high blood pressure

`P(H|B)`

*Bayes Therom -> Swap em, former, latter*

```r
P(H|B) = P(B|H) * P(H) / P(P)
```

4.High blood pressure and an abnormal electrocardiogram

`P(B ^ E)`

*B and E are conditionally independent given H. So we can multiply their conditional probabilities given H. We do the same for not H. Second Axom or prob*

```r
P(B ^ E) = P(B|H) * P(E|H) * P(H) + P(B|!H) P(E|!H) * P(!H)
```

5.Heart disease given high blood pressure and a normal electrocardiogram

`P(H| B ^ !E)`

*Bayes Therom, swap em, former, latter*

```r
P(B ^ !E) = P(B|H) * P(!E|H) * P(H) + P(B|!H) * P(!E|!H) * P(!H)
P(H|B ^ !E) = P(B|H) * P(!E|H) * P(H) / P(B ^ !E)
```

6.Heart disease given smoking

`P(H|S)`

*Since H depends on both S and D we have to consider the case of D and the case of not D and add them together*

```r
P(H|S) = P(H|S, D) * P(D) + P(H|S, !D) * P(!D)
```

7.An abnormal electrocardiogram given smoking

`P(E|S)`

*Since E depends on H which in turn depends on S we can write*

```r
P(E|S) = P(E|H) * P(H|S) + P(E|!H) * P(!H|S)
```

8.Heart disease given an abnormal electrocardiogram and smoking

`P(H|E ^ S)`

```r
P(H ^ E ^ S) = P(E|H) * P(H|S) * P(S)
P(E ^ S) = P(E|S) * P(S)

P(H|E ^ S) = P(H ^ E ^ S) / P(E ^ S)
P(H|E ^ S) = P(E|H) * P(H|S) * P(S) / P(E|S) * P(S)
```

b) How many different combinations of the five node values does the above network have?

5 nodes, two values a node(true, false):

`2 X 2 X 2 X 2 X 2 = 32`

c) Can you give a general algorithm for computing any probability of this type?

```r
P(X ^ Y) # sum of the probabilities of all combinations where X and Y are true
P(Y) # sum of the probabilities of all combinations where Y are true

P(X|Y) = P(X ^ Y) / P(Y)
```

d) How would the execution time of your algorithm change if the number of nodes in the network were to be increased?

For every node added, the execution time would increase by ^2

So 6 nodes becomes: `2 X 2 X 2 X 2 X 2 X 2 = 64` and so on

### Question 2

Either smoking or bad diet or both can make heart disease more likely. The probabilities of smoking and bad diet are different for men and women. You can suppose that smoking and bad diet are independent given gender.

Draw the Bayesian Network to represent these relations. Use the following symbols
S = smoking, D = bad diet, H = heart disease, M=male

Suppose a medical survey gives you the following data:

M -> S||D -> H

```r
P(M) = 0.49

P(H| S,D) = 0.8
P(H| !S,D) = 0.5
P(H| S,!D) = 0.4
P(H| !S,!D) = 0.1

P(S|M) = 0.2
P(S|!M) = 0.3
P(D|M) = 0.4
P(D|!M) = 0.2
```

a) What are the probabilities of the following situations:
1.smoking

`P(S)`

*Two possibilites: Male && Smokes female && smokes*

```r
P(S) = P(M ^ S) + P(!M ^ S)

P(M ^ S) = P(S|M) * P(M)
P(!M ^ S) = P(S|!M) * P(!M)

P(S) = P(S|M) * P(M) + P(S|!M) * P(!M)

P(S) = 0.2 * 0.49 + 0.3 * (1 - 0.49) = 0.251
```

2.being male given smoking

`P(M|S)`

```r
P(M|S) = P(S|M) * P(M) / P(S)

P(M|S) = 0.2 * 0.49 / 0.251
P(M|S) = 0.3904382
```

3.smoking and bad diet

`P(S ^ D)`

*S and D are conditionally independant given M. So we can multiply their conditional probabilities given M. We do the same for not M. Second Axom or prob*

```r
P(S ^ D) = P(S|M) * P(D|M) * P(M) + P(S|!M) * P(D|!M) * P(!M)
```

4.being male given smoking and bad diet

`P(M| S ^ D)`

```r
1. Find latter
P(M| S ^ D) = P(S|M) * P(D|M) * P(M) + P(S|!M) * P(D|!M) * P(!M) / P(M)
```

5.heart disease given smoking

`P(H|S)`

*Since H depends on both S and D we have to consider the case of D and the case of not D and add them together*

```r
P(H|S) = P(H|S, D) * P(D) + P(H|S, !D) * P(!D)
```

6.heart disease

`P(H)`

*H depends on S && D, so we must add up all probabilities of their states*

```r
P(H) = P(H| S,D) * P(S) * P(D) + P(H| !S,D) * P(!S) * P(D) + P(H| S,!D) * P(S) * P(!D) + P(H| !S,!D) * P(!S) * P(!D)
```

7.heart disease given male

`P(H|M)`

```r
```

8.male given heart disease

`P(M|H)`

```r
```

9.smoking given heart disease

`P(S|H)`

```r
```

b) How many different combinations of the four node values does the above network have?

```r
S = MSDH, M!SDH, MS!DH, MSD!H, M!SD!H, MS!D!H, M!S!D!H, M!S!DH, !MSDH, !M!SDH, !MS!DH, !MSD!H, !M!SD!H, !MS!D!H, !M!S!D!H, !M!S!DH

16
```

c) Suppose you wished to calculate the probability of each of these combinations. What is the minimum number of multiplications and additions necessary to work out the probabilty of all the combinations? Explain how you reach your answer.

## Tutorial One

1.Consider a box containing 15 red balls, 10 green balls and 5 blue balls. Let 5 balls be drawn at random without replacement from the box. Please give the probabilities of the following events. Please show your reasoning in each case.

`S = {rrrrr, rrrrg, rrrgg, rrggg, rgggg, rrrrb, rrrbb, rrbbb, rbbbb, }`

+ The first ball is red

```r
perm(15, 1)/perm(30,1)
```

+ The second ball is red

```r
perm(14, 1)/perm(29,1)
```

+ The first ball and the second ball are red

```r
perm(15, 2)/perm(30,2)
```

+ The second ball is red given that the first ball is red

```r
```

+ The first ball is red given that the second ball is red

```r
```

+ Either the first ball or the second ball or both are red

```r
```

+ Five balls all of the same colour

```r
```

+ Exactly two reds

```r
```

+ The sequence r,g,b,r,g

```r
```

+ Getting two reds, two greens and a blue in any order

```r
```

2.The following table gives the mean wealth and percentage population in various regions of a fictitious country.

Region =  Ashire Bshire Cshire West Toptown East Toptown South Toptown North Toptown
Wealth =  80     110    110    70           120          90            110
Pop %  =  15     20     20     10           10           10            15

+ What are the mean and variance of the wealth for the whole country?

```r
wealth <- c(80,110,110,70,120,90,110)
pop <- c(15,20,20,10,10,10,15)

mean(wealth)
mean(pop)
var(wealth)
var(pop)
```

+ What are the mean and variance of the wealth for those who live in Toptown?

```r
topWealth <- c(70, 120, 90, 110)
topPop <- c(10, 10, 10, 15) /.45

mean(topWealth)
mean(topPop)
var(topWealth)
var(topPop)
```

+ What is the probability of living in an area with mean wealth > 100 if you live in Toptown?

```r

```

+ What is the probability that you live in Toptown given that you live in an area with mean wealth > 100?

```r
```

3.In a certain messaging system, if a 1 is transmitted there is 5% probability that a 0 will be received. If a 0 is transmitted there is a 10% probability that a 1 will be received. There is a probability of 30% that a 1 is transmitted.

+ What is the probability that a 1 is received?

```r
```

+ What is the probability that a 1 was transmitted given that a 1 was received?

```r
```

+ Suppose the sender decides to transmit each digit twice. If a digit is sent twice, what is the probability that a 1 and a 0 are received?

```r
```

+ If a 1 and a 0 are received what is the probability that a 1 was sent twice?

```r
```

## Classifiers

We must design an algorithm which takes the features as inputs and class as output

Features -> Classifiers -> Class

### Feature space

In a image: Features are pixels(N)

Each Image: Vector of image values -> *feature vector*

Each element of vector -> dimension of an N-dimensional space -> *feature space*

### Pattern reconigition

Pattern reconigition falls under two categories:

1. Learning phase
1. Classification phase

*Learning Phase:* -> Give algorithm set of data with `know` classes. Uses this data to decide where to put the `decision surfaces`.

*Classification phase* -> Give algorithm new data. Uses `decision surfaces` to decide how to classify new data.

+ `Noise`: data corruption
+ `Occams razor`: Dont make `decision surfaces` more complicated than the training data justifies.
+ `Porbalistic reasoning`: We can never classifcy 100%, best guess.
+ `Accuary`: Never 100% accurate.
+ *Misclassifications*:
  + Too much noise
  + `decision surfaces` incorrectly set
  + Clusters overlap in feature space

+ All data contains noise,
  + Images taken are different, no identical images.
  + Always will be random variant in pixels.
  + Take many photos of same object and plot on feature space:
    + They form spherical cluster: radius proportinal to amount of noise in images
    + Cloud straddles decision boundary -> Cause image to be classified differently.

### Complexity

+ *Do not make decision surfaces too complex*
  + More data -> More confidence in curve for decision surface.

### Occams Rzaor

+ *The model of decision surface should not contain more paramaters than there are objects in the data set*
+ This problem becomes very severe when you have large amounts of dimentions -> the dimention curse
+ *Reduce dimentions*: Principal Compoent Anaylisis

### Ambiguity

+ We dont always assign objects to one class,
  + They can be have a range of probabilities
  + All these probablities must add up to `1`
  + The more ambiquity, the closer to the decision surfaces

### K Nearest Neighbour

+ Assign object to nearest cluster classification

### Maximum Likelihood

+ We could try to construct decision boundaries by using models of the distribution of the data for each class
+ For example, we could assume Normal distributions
+ Models usually have parameters e.g. the Normal distribution has the mean and standard deviation
+ We can choose the parameters by maximising the likelihood over the training set

### The Normal Distribution with Many Feature Values

+ The simplest case: both classes have the same shape and the feature values are independent have the same standard deviation
  + d^2 = y^2 + x^2
+ The most complex model: Assumes `feature values are still independant` but the `standard divations are now different`.
  + d^2 = y^2/o^2^y + x^2/o^2^x
+ The next most complex model assumes: The feature values are `no longer independant`.
+ The most complex model assumes: feature values are not indepdant but the probabiltiy distributions for the two classes have different shapes
+ *In general the the decision surfaces will be quadratic curves.*
+ If we have N feature vales, a line, requires N paramaters but a quadtric curves requires N^2.
+ In image analysis it is quite common to have more than 1000's since each pixel counts as a feature value,
  + a quadratic curve would require more than 1 million paramz

### Eigenvectors

+ The main purpose of Principal Component Analysis, is used to find the vectors wjich represent the axes of the ellipsoids
+ It turns out that these vectors are the eigenvectors of the covariance matrix. The eignevalues and  eigenvectors of a square matrix `A` defidned by

### The Normal Distribution with Many Feature Values

+ Suppose we have more than one feature value. For example, we are now given two pieces of information about the unknown person X – the weight and the height. How can we incorporate this into Bayesian classification?
+ We can assume a series of models of increasing complexity.
+ The simplest model we could assume is that the feature values are independent and that the standard deviation is the same for each.
+ When we say the feature values are independent we mean that they are not correlated in any way. In other words one feature value gives you no information about any of the others

+ NB the contours do NOT represent limits of the distributions.
+ Both distributions go on to infinity in all directions. The distributions pass through each other.

+ In this case the contours are circles centred on the means of each class.
+ Let us further assume that the probability distributions for each class have the same shape. In other words the feature values for each class are independent and the standard deviations are the same for each value.

+ Notice how the probability of belonging to a certain class depends on the distance from the mean of that class. 
+ The distance d is given by


+ Notice how the probability of belonging to a certain class depends on the
+ distance from the mean of that class.
+ The distance d is given by:
  + d^2 = x^2 + y^2
+ which is just Pythagoras theorem
+ The decision boundary between two classes will be the set of points which are equally distant from the means of both classes. This will be a straight line which passes through the midpoint of the line joining the two means.
+ This line is known as the “perpendicular bisector” of the two means.
+ Now the next most complex model assumes that the feature values are still independent but that the standard deviations are now different. + This leads to the situation shown below.
+ The probability contours are now elliptical and the axes of the ellipse are parallel to the x and y axes.
+ Lets still assume that the shape of the probability distribution is the same for each class. In other words only the position of the mean is different.
+ Now we can obtain Fig 1 from Fig 2 by a simple transformation. Imagine that Fig 2 is drawn on a rubber sheet. If we squash the rubber sheet in the x direction then we can convert the ellipses into circles. We could then draw a decision boundary between the two classes. It will be the perpendicular bisector between the two means.
+ We could then stretch the rubber sheet back to its original position. The decision boundary will still be a straight line but its slope will have changed.
+ Alternatively we could also describe the probability distributions in terms of distance from the means. But now we have to invent a new type of distance metric
+ This is called Mahalanobis distance. The decision boundary is the set of points with equal Mahalanobis distance from the two means.

## Sample Lab Exam

### Q1. A If you throw two dice, let the total score be X

+ (i) What are the probabilities of each value of X? [5 marks]
  + `(1,1)(1,2)(2,1)....etc = 36 possibilities`
+ (ii) What is P(one of the scores is 4 | X=9)? [3 marks]
  + `X = 9 = (4,5)(5,4)(6,3)(3,6) = 4 occurs two times = 2/4`
+ (iii) What is P(X = 9 | one of the scores is 4)? [3 marks]
  + `(1,4)(2,4)(3,4)(5,4)(6,4)(4,1)(4,2)(4,3)(4,5)(4,6) = 2/10`
+ (iv) What is P(at least one score is 4)? [2 marks]
  + `(1,4)(2,4)(3,4)(5,4)(6,4)(4,1)(4,2)(4,3)(4,5)(4,6) = 2/10`
+ (v) What is P(both scores are the same)? [2 marks]
  + `(1,1)(2,2)(3,3)(4,4)(5,5)(6,6) = 6/36 = 1/6`
+ (vi) What are the mean and variance of X? [5 marks]
  + `Mean(X) = sum(P(X) * X) = 7`
  + `Var(X) = sum(P(X) * (X-mean)^2) = 5.833`

+ *The Mean of a Discrete Random Variable = Sum of values multipled by corresponding propabilities*

### Q1. B Suppose there is a hidden Markov sequence consisting of three symbols “a”, “b” and “c”. The observed sequence consists of the same symbols but they may be affected by noise. These sequences are described by a Hidden Markov Model, whose transition matrix and emission matrix are respectively

```bash

`Transition Matrix`
  A    B    C
(0.90 0.09 0.01) A
(0.09 0.90 0.09) B
(0.01 0.09 0.90) C

`Emission Matrix`
  A    B    C
(0.90 0.05 0.05) A
(0.05 0.90 0.05) B
(0.05 0.05 0.90) C
```

+ If the probability distribution over the three symbols at time t is `(0.6, 0.3, 0.1)` and the observed symbol at time `t+1 is “b”`, what is the probability distribution over the three symbols at time `t+1?` Please explain your answer:

```js
A hidden Markov model (HMM) is one in which you observe a sequence of emissions, but do not know the sequence of states the model went through to generate the emissions. Analyses of hidden Markov models seek to recover the sequence of states from the observed data.

We can answer this question using Bayes Theorem:
'P(Hypothesis | Data) = P(Data | Hypothesis) P(Hypothesis) / P(Data)'

'We must solve for all three symbols(a, b and c)'

P(H|D) = Prior probability that Pi+1 is our respective symbol i.e. a, b or c.

'P(H|D) = Pi+1(a)'
'P(H|D) = Pi+1(b)'
'P(H|D) = Pi+1(c)'

P(D|H) = Emission matrix where D = 'b' i.e. second position in matrix

'P(D|H) = e12'
'P(D|H) = e22'
'P(D|H) = e32'

P(H) = Transmission matrix where D = 'b' i.e. second position in matrix

'P(H) = Pi(a) * t11 + Pi(b) * t21 + Pi(c) * t31'
'P(H) = Pi(a) * t12 + Pi(b) * t22 + Pi(c) * t32'
'P(H) = Pi(a) * t13 + Pi(b) * t23 + Pi(c) * t33'

 '0.0041, 0.25164 and 0.00492'

`P(D) = Sum of three P(H)`
```

### Q2

#### Q 2(a) What is Occam’s Razor? How can you explain it using Bayes Theorem

```js
{'Occam’s Razor': 'States that when you have two equally likely models, the simpler model is preferred i.e.  simpler hypotheses are preferable to more complex ones'};

const bayes therom = 'P(H|D) = P(D|H) * P(H) / P(D)';

+ P(H) is our prior probability of the Hypothesis before we see the data (D).
+ We can measure the complexity of P(H) by the amount of variables it takes to describe it.
+ Example: Suppose the Data might fall into 1 cluster(C1) or 2 clusters(C2).
  + There are more combinations of 2 clusters than 1 cluster.
  + This makes the prior porbabiliy of any combination of 2 clusters smaller than the prior probability of 1 clusters
  + P(C1) is higher than P(C2) because C1 has less variables. SIMPLE!
+ We might still accept a more complex Hypothesis but only if it gives a higher value for P(H|D) than the simpler Hypothesis.
+ I.e. if the complex data explains the Hypothesis better than the simple Hypothesis, we would prefer it even though it has a lower probability than the simpler model.
```

#### Q 2(b) [5 Marks]

+ Suppose you have a set of objects which all belong to the same class. The objects are described by one feature value x which can have any integer value in the range - to +. The probability distribution over x for this particular class is shown below. The distribution has one parameter m. P(x) ∝ exp((𝑥 − 𝑚) 2 2𝜎2)

+ Suppose you wished to learn what the value of m was. Suppose you were given one object belonging to the class and it had feature value x=5. What is the posterior distribution over all possible values of m? Assume 𝜎is known.

```js
∝ The symbol for "directly proportional"

Start with bayes therom:

P(H|D) = P(D|H) * P(H) / P(D)

'Where D = 5 aka x = 5 and and the Hypothesis is m'

We are asked to find the posterior distribution over all possible values of m. The posterior is P(H|D). P(H) is the prior distribution over m, before we see the data.

+ We have no reason to prefer any particular value of m, so all values are equally probabale.
+ So P(H) is just a constant for all values of m.
+ This means that we can simplify our expression of Bayes Theorem as follows:
  + `P(H|D) ∝ P(D|H)`
  + `P(D|H) = P(X=5|m)`
  + `P(x = 5) ∝ exp((5 − 𝑚) 2 2𝜎2)`
  + `P(H|D) = P(m | X = 5) ∝ P(X = 5 | m) ∝ exp((5 − 𝑚) 2 2𝜎2)`
```

#### Q 2(c) [5 Marks]

+ Suppose you are now given an additional object belonging to the class and this additional object has feature value x=3. What is the posterior distribution over m now? Explain using Bayes Theorem how you calculated it.

#### Q 2(d) [5 Marks]

+ Suppose you did not know the value of 𝜎, how would you estimate it given the two objects in parts (b) and (c)?

#### Q 2(e) [5 Marks]

+ Suppose there were two different classes with different values for m and 𝜎. Sketch the different ways in which they could overlap. How would you estimate the error rates in each case?
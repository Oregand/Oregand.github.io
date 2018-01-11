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

### The Normal Distribution with Many Feature Values(1)

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


## External Study -> Math is fun

### Basic Prob

#### Relative Freq

```js
92 people were asked how they got to work:

35 used a car
42 took public transport
8 rode a bicycle
7 walked

The Relative Frequencies (to 2 decimal places) are:

Car: 35/92 = 0.38
Public Transport: 42/92 = 0.46
Bicycle: 8/92 = 0.09
Walking: 7/92 = 0.08

0.38+0.46+0.09+0.08 = 1.01
```

#### Dice Question

*Two Dice*

We know there are 36 possible outcomes.

And there is only 1 way to get a total score of 2.

So the probability of getting 2 is:

`Probability of a 2 =  136`

```js
Doing that for each score gets us:

Total Score /	Probability

2	  1/36
3	  2/36
4	  3/36
5	  4/36
6	  5/36
7	  6/36
8	  5/36
9	  4/36
10	3/36
11	2/36
12	1/36

Total = 1

The sum of all the probabilities is 1

```

For any experiment:

The sum of the probabilities of all possible outcomes is always equal to 1

### Events

#### Compliment

```js
Complement of an Event: All outcomes that are NOT the event.

Example: Different scores(4,5) vs same scores in dice roll(4,4)

Different scores are like getting a 2 and 3, or a 6 and 1. It is quite a long list:

A = { (1,2), (1,3), (1,4), (1,5), (1,6), (2,1), (2,3), (2,4), ... etc ! }

But the complement (which is when the two scores are the same) is only 6 outcomes:

!A = { (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) }

And its probability is:

P(!A) = 6/36 = 1/6

Knowing that P(A) and P(!A) together make 1, we can calculate:

P(A) = 1 − P(!A)
    = 1 − 1/6
    = 5/6


So in this case (and many others) its easier to work out P(!A) first, then find P(A)
```

#### Type of Events

Events can be:

*Independent* (each event is not affected by other events),
*Dependent* (also called *Conditional*, where an event is affected by other events)
*Mutually Exclusive* (events can't happen at the same time)

#### Independant Events

*Independent Events are not affected by previous events.*

```js
Example: You toss a coin and it comes up "Heads" three times ... what is the chance that the next toss will also be a "Head"?

The chance is simply ½ (or 0.5) just like ANY toss of the coin.

What it did in the past will not affect the current toss!
```

##### Probability of Independent Events

Probability of an event happening =  Number of ways it can happen / Total number of outcomes

```js
Example: what is the probability of getting a "Head" when tossing a coin?

Number of ways it can happen: 1 (Head)

Total number of outcomes: 2 (Head and Tail)

So the probability =  1 / 2 = 0.5
```

##### Two or More Events

*We can calculate the chances of two or more independent events by multiplying the chances.*

```js
Example: Probability of 3 Heads in a Row

For each toss of a coin a "Head" has a probability of 0.5:

1st toss: P(H) = 0.5

2nd toss: P(H,H) = 0.5 * 0.5

3rd toss: P(H,H,H) = 0.5 * 0.5 * 0.5

And so the chance of getting 3 Heads in a row is 0.125
```

P(A and B) = P(A) × P(B)

`P(A,B) = P(A) × P(B)`

```js
Example: your boss (to be fair) randomly assigns everyone an extra 2 hours work on weekend evenings between 4 and midnight.

What are the chances you get Saturday between 6 and 8?

Day: there are two days on the weekend, so P(Saturday) = 0.5

Time: you want the 2 hours of 6-to-8, out of the 8 hours of 4-to-midnight):

P(Your Time) = 2/8 = 0.25

And:

P(Saturday and Your Time)	= P(Saturday) × P(Your Time)
 	= 0.5 × 0.25
 	= 0.125

Or a 12.5% Chance

(Note: we could ALSO have worked out that you wanted 2 hours out of a total possible 16 hours, which is 2/16 = 0.125. Both methods work here.)
```

#### Dependant Events(Conditional Prob)

*But events can also be "dependent" ... which means they can be affected by previous events ...*

```js
Example: Marbles in a Bag

2 blue and 3 red marbles are in a bag.

What are the chances of getting a blue marble?

The chance is 2 in 5

But after taking one out the chances change!

So the next time:

if we got a red marble before, then the chance of a blue marble next is 2 in 4
if we got a blue marble before, then the chance of a blue marble next is 1 in 4
```

`"Replacement"`

Note: if we replace the marbles in the bag each time, then the chances do not change and the events are independent:

With Replacement: the events are Independent (the chances don't change)
Without Replacement: the events are Dependent (the chances change)

P(A and B) = P(A) * P(B|A)

"Probability of event A and event B equals the probability of event A times the probability of event B given event A"

```js
Example: Drawing 2 Kings from a Deck

Event A is drawing a King first, and Event B is drawing a King second.

For the first card the chance of drawing a King is 4 out of 52 (there are 4 Kings in a deck of 52 cards):

P(A) = 4/52

But after removing a King from the deck the probability of the 2nd card drawn is less likely to be a King (only 3 of the 51 cards left are Kings):

P(B|A) = 3/51

And so:

P(A and B) = P(A) * P(B|A) = (4/52)	x (3/51) = 12/2652 = 1/221
```

#### Mutally Exclusive Events

*Mutually Exclusive: can't happen at the same time*

`P(A or B) = P(A) + P(B)`

```js
Example: King OR Queen
In a Deck of 52 Cards:

the probability of a King is 1/13, so P(King)=1/13
the probability of a Queen is also 1/13, so P(Queen)=1/13

When we combine those two Events:

The probability of a King or a Queen is (1/13) + (1/13) = 2/13
Which is written like this:

P(King or Queen) = (1/13) + (1/13) = 2/13
```

Instead of "and" you will often see the symbol ∩ (which is the "Intersection" symbol used in Venn Diagrams)
Instead of "or" you will often see the symbol ∪ (the "Union" symbol)

`P(King ∩ Queen) = 0`
`P(King ∪ Queen) = (1/13) + (1/13) = 2/13`

#### Not Mutually Exclusive

`P(A or B) = P(A) + P(B) − P(A and B)`

```js
16 people study French, 21 study Spanish and there are 30 altogether. Work out the probabilities!

You can study french and spanish.

Lets say b is how many study both languages:

people studying French Only must be 16-b
people studying Spanish Only must be 21-b

And we know there are 30 people, so:

(16−b) + b + (21−b) = 30
37 − b = 30
b = 7

So we know all this now:

P(French) = 16/30
P(Spanish) = 21/30
P(French Only) = 9/30
P(Spanish Only) = 14/30
P(French or Spanish) = 30/30 = 1
P(French and Spanish) = 7/30
Lastly, let's check with our formula:

P(A or B) = P(A) + P(B) − P(A and B)

Put the values in:

30/30 = 16/30 + 21/30 − 7/30
```

### Combinations and Permutations

*When the order doesn't matter, it is a Combination.*

*When the order does matter it is a Permutation.*

`A Permutation is an ordered Combination.`

#### Permutation

There are basically two types of permutation:

+ Repetition is Allowed: such as the lock above. It could be "333".
+ No Repetition: for example the first three people in a running race. You can't be first and second.

##### 1. Permutations with Repetition

```js
Example: in the lock above, there are 10 numbers to choose from (0,1,2,3,4,5,6,7,8,9) and we choose 3 of them:

10 × 10 × ... (3 times) = 103 = 1,000 permutations
```

So, the formula is simply:

n^r

Where n is the number of things to choose from, and we choose r of them, repetition is allowed, and order matters.

##### 2. Permutations without Repetition

```js
Example: what order could 16 pool balls be in?


After choosing, say, number "14" we cant choose it again.

So, our first choice has 16 possibilites, and our next choice has 15 possibilities, then 14, 13, 12, 11, ... etc. And the total permutations are:

16 × 15 × 14 × 13 × ... = 20,922,789,888,000

But maybe we dont want to choose them all, just 3 of them, and that is then:

16 × 15 × 14 = 3,360
```

*Without repetition our choices get reduced each time.*

```js
The factorial function (symbol: !) just means to multiply a series of descending natural numbers. Examples:

4! = 4 × 3 × 2 × 1 = 24
```

```js
Example Our "order of 3 out of 16 pool balls example" is:

16! / (16 - 3)! = 16! / 13! = 3360
```

Notation:

`Example: P(10,2) = 90`

#### Combinations

There are also two types of combinations (remember the order does not matter now):

Repetition is Allowed: such as coins in your pocket (5,5,5,10,10)
No Repetition: such as lottery numbers (2,14,15,27,30,33)

##### 1. Combinations with Repetition

Formula:

`n! / r!(n − r)!`

```js
Example: Pool Balls (without order)

16! / 3!(16−3)!  =  16! / 3! × 13!

Or

16×15×14 / 3×2×1
```

##### 2. Combinations without Repetition

Let us say there are five flavors of icecream: banana, chocolate, lemon, strawberry and vanilla.

We can have three scoops. How many variations will there be?

Let's use letters for the flavors: {b, c, l, s, v}. Example selections include

{c, c, c} (3 scoops of chocolate)
{b, l, v} (one each of banana, lemon and vanilla)
{b, v, v} (one of banana, two of vanilla)
(And just to be clear: There are n=5 things to choose from, and we choose r=3 of them.
Order does not matter, and we can repeat!)

`(3 + 5 - 1)! / 3!(5 - 1)! = 35`

There are 35 ways of having 3 scoops from five flavors of icecream.

### Advanced Prob

#### Bayes Therom

`P(H|D) = P(D|H) * P(H) / P(D)`

```js
Example: If dangerous fires are rare (1%) but smoke is fairly common (10%) due to barbecues, and 90% of dangerous fires make smoke then:

So the "Probability of dangerous Fire when there is Smoke":

P(F) * P(S|F) / P(S)
```

#### Shared Birthdays

```js
There are 30 people in a room ... what is the chance that any two of them celebrate their birthday on the same day? Assume 365 days in a year.

The chance of not matching:

364/365 × 363/365 × 362/365 × ... × 336/365 = 0.294...

And the probability of matching is 1 − 0.294... :

The probability of sharing a birthday = 1 − 0.294... = 0.706...

Or a 70.6% chance, which is likely!
```

### Random Variables

```js
Example: Two dice are tossed.

The Random Variable is X = "The sum of the scores on the two dice".

There are 6 × 6 = 36 of them, and the Sample Space = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}

+ 2 occurs just once, so P(X = 2) = 1/36
+ 3 occurs twice, so P(X = 3) = 2/36 = 1/18
+ 4 occurs three times, so P(X = 4) = 3/36 = 1/12
+ 5 occurs four times, so P(X = 5) = 4/36 = 1/9
+ 6 occurs five times, so P(X = 6) = 5/36
+ 7 occurs six times, so P(X = 7) = 6/36 = 1/6
+ 8 occurs five times, so P(X = 8) = 5/36
+ 9 occurs four times, so P(X = 9) = 4/36 = 1/9
+ 10 occurs three times, so P(X = 10) = 3/36 = 1/12
+ 11 occurs twice, so P(X = 11) = 2/36 = 1/18
+ 12 occurs just once, so P(X = 12) = 1/36
```

#### Random Variables(Continuous)

Continuous Data can take any value within a range (such as a person's height)

##### The Uniform Distribution

The Uniform Distribution (also called the Rectangular Distribution) is the simplest distribution.

It has equal probability for all values of the Random variable between a and b:

```js
The probability of any value between a and b is p

We also know that p = 1/(b-a), because the total of all probabilities must be 1, so

the area of the rectangle = 1
p × (b−a) = 1
p = 1/(b−a)
```

```js
Example: Old Faithful erupts every 91 minutes. You arrive there at random and wait for 20 minutes ... what is the probability you will see it erupt?

This is actually easy to calculate, 20 minutes out of 91 minutes is:

p = 20/91 = 0.22 (to 2 decimals)

But lets use the Uniform Distribution for practice.

To find the probability between a and a+20, find the blue area:

Area = (1/91) x (a+20 − a) 
= (1/91) x 20 
= 20/91 
= 0.22 (to 2 decimals)

So there is a 0.22 probability you will see Old Faithful erupt.
```

#### Random Variables(Discreet)

Discrete Data can only take certain values (such as 1,2,3,4,5)

#### Random Variables: Mean, Variance and Standard Deviation

*Mean*

```js
For fun, imagine a weighted die (cheating!) so we have these probabilities:

 1	  2	    3	    4	    5	   6
0.1	 0.1	 0.1	 0.1	 0.1	0.5

To calculate the Expected Value:

multiply each value by its probability sum them up

x	1	2	3	4	5	6

p	0.1	0.1	0.1	0.1	0.1	0.5

xp	0.1	0.2	0.3	0.4	0.5	3

μ = Σxp = 0.1+0.2+0.3+0.4+0.5+3 = 4.5

The expected value is 4.5
```

*Variance*

```js
To calculate the Variance:

square each value and multiply by its probability
sum them up and we get Σx2p
then subtract the square of the Expected Value μ2

x	1	2	3	4	5	6
p	0.1	0.1	0.1	0.1	0.1	0.5
x2p	0.1	0.4	0.9	1.6	2.5	18
Σx2p = 0.1+0.4+0.9+1.6+2.5+18 = 23.5

Var(X) = Σx2p − μ2 = 23.5 - 4.52 = 3.25

The variance is 3.25
```

*Standard Deviation: σ*

```js
The Standard Deviation is the square root of the Variance:

σ = √Var(X)

x	1	2	3	4	5	6
p	0.1	0.1	0.1	0.1	0.1	0.5
x2p	0.1	0.4	0.9	1.6	2.5	18
σ = √Var(X) = √3.25 = 1.803...

The Standard Deviation is 1.803..
```

Summed Example:

```js

```

*Summary*

+ A Random Variable is a variable whose possible values are numerical outcomes of a random experiment.
+ The Mean (Expected Value) is: μ = Σxp
+ The Variance is: Var(X) = Σx2p − μ2
+ The Standard Deviation is: σ = √Var(X)



### The Binomial Distribution

### The Normal Distribution

Data can be "distributed" (spread out) in different ways.

The "Bell Curve" is a Normal Distribution. It is often called a "Bell Curve" because it looks like a bell.

#### Standard Deviations

*The Standard Deviation is a measure of how spread out numbers are*

Its symbol is σ (the greek letter sigma)

The formula is easy: it is the square root of the Variance. So now you ask, "What is the Variance?"

`Variance`

The Variance is defined as: The average of the squared differences from the Mean.

To calculate the variance follow these steps:

+ Work out the Mean (the simple average of the numbers)
+ Then for each number: subtract the Mean and square the result (the squared difference).
+ Then work out the average of those squared differences. (Why Square?)

```js
Numbers: -5,1,8,7,2

1. Mean

Count: 5 (How many numbers)
Sum: 13 (All the numbers added up)
Mean: 2.6 (Arithmetic mean = Sum / Count)

Then, take each number, subtract the mean and square the result:

Differences: -7.6, -1.6, 5.4, 4.4, -0.6 (Every Number minus the Mean)
Differences2: 57.76, 2.56, 29.16, 19.36, 0.36 (Square of each difference)

Now calculate the Variance:

Sum of Differences2: 109.2 (Add up the Squared Differences)
Variance: 27.3 (Sum of Differences2 / (Count−1))

Lastly, take the square root of the Variance:
Standard Deviation: 5.224940191 (The square root of the Variance)
```

#### Example (ND)

```js
Example: 95% of students at school are between 1.1m and 1.7m tall.

Assuming this data is normally distributed can you calculate the mean and standard deviation?

The mean is halfway between 1.1m and 1.7m:

Mean = (1.1m + 1.7m) / 2 = 1.4m


95% is 2 standard deviations either side of the mean (a total of 4 standard deviations) so:

1 standard deviation	= (1.7m-1.1m) / 4
 	= 0.6m / 4
 	= 0.15m

It is good to know the standard deviation, because we can say that any value is:

likely to be within 1 standard deviation (68 out of 100 should be)
very likely to be within 2 standard deviations (95 out of 100 should be)
almost certainly within 3 standard deviations (997 out of 1000 should be)
```

The number of standard deviations from the mean is also called the "Standard Score", "sigma" or "z-score". Get used to those words!

### Sample Paper With Answers

#### Q1

##### Q1 A

If you throw two dice, let the total score be X.

+ i) What are the probabilities of each value of X?
  + `P(X) = 1/36`
+ ii) What is P(one of the scores is 4 | X=9)?
  + `(4,5)(5,4)(6,3)(3,6)` = 2/4 = 0.5
+ iii) What is P(X = 9 | exactly one of the scores is 4)?
  + `(1,4)(2,4)(3,4)(5,4)(6,4)(4,1)(4,2)(4,3)(4,5)(4,6)` = 2/10 = 0.2
+ iv) What is P(at least one score is 4)?
  + `(1,4)(2,4)(3,4)(5,4)(6,4)(4,1)(4,2)(4,3)(4,5)(4,6)(4,4)` = 11/36
+ v) What is P(both scores are the same)?
  + `(1,1)(2,2)(3,3)(4,4)(5,5)(6,6)` = 6/36 = 1/6
+ vi) What are the mean and variance of X?
  + `Mean = Sum/Count = 77/11 = 7`
  + `Mean(X) = sum(P(X) * X) = P(X=2) * 2 + P(X=3) * 3 ... + P(X=12) * 12`
  + `Var(X) = sum(P(X) * (X-mean)^2) = P(X=2) * (2 - 7)^2 + P(X=3) * (3 - 7)^2 ... + P(X=12) * (12 - 7)^2`

##### Q1 B

Suppose there is a hidden Markov sequence consisting of three symbols “a”, “b” and “c”. The observed sequence consists of the same symbols but they may be affected by noise. These sequences are described by a Hidden Markov Model (HMM).

The transition matrix for the HMM is given by

```js
(0.90 0.09 0.01
0.01 0.90 0.09
0.09 0.01 0.90)
```

where the first row represents the probabilities that, if the current symbol is “a”, then the next symbol will be “a”, “b” or “c” respectively.

The second row represents the probabilities that, if the current symbol is “b”, then the next symbol will be “a”, “b” or “c” respectively.
The third row represents the probabilities that, if the current symbol is “c”, then the next symbol will be “a”, “b” or “c” respectively

The emission matrix for the HMM is given by

```js
(0.90 0.05 0.05
0.05 0.90 0.05
0.05 0.05 0.90)
```

where the first row represents the probabilities that, if the hidden symbol is “a”, then the observed symbol will be “a”, “b” or “c” respectively.

The second row represents the probabilities that, if the hidden symbol is “b”, then the observed symbol will be “a”, “b” or “c” respectively.
The third row represents the probabilities that, if the hidden symbol is “c”, then the observed symbol will be “a”, “b” or “c” respectively.
If the probability distribution over the three symbols at position i is (0.6, 0.3, 0.1) and the observed symbol at position i+1 is “b”, what is the probability distribution over the three symbols at position i+1? Please explain your answer.

```js
Use Bayes Therom(Obviously)

Col | Row

P(H|D) P(D|H) * P(H) / P(D)

In this case, the Data is the observed symbol (we are told this is `b`).

In this case, we have three possible Hypotheses i.e. the three possible hidden symbols at position i+1.

P(H)  is the prior probability of each of the three possible hidden symbols at position i+1, 𝑃𝑖+1(`a`), 𝑃𝑖+1(`b`) and 𝑃𝑖+1(`c`).

We can get these by combining the probability distribution over the three symbols at position i , 𝑃𝑖 ("a"), 𝑃𝑖("b") 𝑎𝑛𝑑 𝑃𝑖("c") with the transition probabilities, t11,t12,t13,𝑒𝑡𝑐.

P(Data | Hypothesis) is the probability of the observed symbol “b” given each of the possible hidden symbols, 𝑒12,𝑒22 and 𝑒32.

P(H|D) =  Pi+1(a) / Pi+1(b) / Pi+1(c)

P(D|H) = e12 / e22 / e32  = 0.05 / 0.90 / 0.05

P(H) =

Pi+1(a) * t11 + Pi+1(b) * t12 + Pi+1(c) * t13
Pi+1(a) * t21 + Pi+1(b) * t22 + Pi+1(c) * t23
Pi+1(a) * t31 + Pi+1(b) * t32 + Pi+1(c) * t33

P(D|H) * P(H) = 

(Pi+1(a) * t11 + Pi+1(b) * t12 + Pi+1(c) * t13)e12 = x1
(Pi+1(a) * t21 + Pi+1(b) * t22 + Pi+1(c) * t23)e22 = x2
(Pi+1(a) * t31 + Pi+1(b) * t32 + Pi+1(c) * t33)e32 = x3

P(D|H) * P(H) / P(D) = 

(Pi+1(a) * t11 + Pi+1(b) * t12 + Pi+1(c) * t13)e12
(Pi+1(a) * t21 + Pi+1(b) * t22 + Pi+1(c) * t23)e22
(Pi+1(a) * t31 + Pi+1(b) * t32 + Pi+1(c) * t33)e32
---------------------------------------------------
                x1 + x2 + x3
```

#### Q2

##### Q2 A

What is Occam’s Razor? How can you explain it using Bayes Theorem?

##### Q2 B

Suppose you have a set of objects which all belong to the same class. The objects are described by one feature value x which can have any integer value in the range -INF to +INF. The probability distribution over x for this particular class is shown below.

The distribution has two parameters `m` and `𝜎`.

`P(x) ∝ exp((𝑥 − 𝑚)^2 / 2𝜎^2)`

Suppose you wished to learn what the value of m was. Suppose you were given one object belonging to the class and it had feature value x=5. What is the posterior distribution over all possible values of m? Assume 𝜎is known.

##### Q2 C

Suppose you are now given an additional object belonging to the class and this additional object has feature value x=3. What is the posterior distribution over m now? Explain using Bayes Theorem how you calculated it.

##### Q2 D

Suppose you did not know the value of 𝜎, how would you estimate it given the two objects in parts (b) and (c)?

##### Q2 E

Suppose there were two different classes with different values for m and 𝜎. Sketch a way in which they might overlap. How would you estimate the error rates?

#### Q3

##### Q3 A

Explain what the elements of the covariance matrix are. What does the covariance matrix look like for different levels of complexity of the Multivariate Normal Distribution? You can assume there are two feature values.

##### Q3 B

Suppose you have a set of objects described by two feature values. The objects fall into two classes. Assume that they both obey a Multivariate Normal distribution. The distributions are shown below

The shape of the two distributions is the same except that one has been rotated with respect to the other.

The means `m1` and `m2` of the two classes are:

`(4,5) and (7,5)`

The major axis of the left-hand distribution is parallel to the y axis and the major axis of the right hand distribution is parallel to the x axis. The standard deviations along the major and minor axes of both distributions are 2.0 and 1.0 respectively

+ i) Which of the levels of complexity in part (a) above applies in this situation?
+ ii) Using Mahalanobis Distance, give an equation for the decision boundary.
+ iii) Where does the major axis of the right-hand distribution cross the decision boundary?
+ iv) Make a sketch of the Decision Boundary.

##### Q3 C

+ i) Describe the technique of Principal Components Analysis (PCA). In what circumstances would you use it and why?
+ ii) How would smoothing the data affect the PCA?

##### Q3 D

Suppose you were to apply PCA to a large set of video sequences of people walking. What would the sequences look like in Principal Component Space? What modes of variation do you think you could recover? How would you use PCA to build a system which could recognise people by the way they walk?

#### Q4

##### Q4 A

Suppose you come home to find your favourite vase has fallen on the ground and smashed. Your initial explanation is that your pet cat has brushed against it. But then you hear on the TV that there has been a minor earthquake in your area, which is a very rare event there. Your belief that the cat is responsible goes down.

Draw the Bayesian network for this situation.

##### Q4 B

Please list all the different probabilities and conditional probabilities for this Bayesian network.

##### Q4 C

In terms of the probabilities which you have just described write down equations for the probabilities of the following situations:

+ i) Broken Vase
+ ii) Cat given broken vase
+ iii) Cat given broken vase and earthquake

##### Q4 D

Explain, using your answers to part (c), why your belief in the Cat goes down when you hear there has been an Earthquake.

#### Q5

The following table contains the results of a test carried out on three different brands of popcorn (Gourmet, National and Generic). For each brand, two different methods of popping the corn were used (Oil and Air). The results show the number of cups of popcorn produced. Each experiment was repeated three times.

| Methods  | Brand       | Brand       | Brand       | Row Means |
| -------- |:-----------:| -----------:| -----------:| ---------:|
| Brands   | G           | N           | G           | Row Means |
| Oil      | 5.5,5.5,6.0 | 4.5,4.5,4.0 | 3.5,4.0,3.0 |           |
| Air      | 6.5,7.0,7.0 | 5.0,5.5,5.0 | 4.0,5.0,4.5 |           |
| Col Means|             |             |             |           |

##### Q5 A

Complete the above table by filling in the row means, column means and Grand Mean.

For each of the following items, calculate the Sum of Squares and give the number of Degrees of Freedom

+ (i) The Total Sum of Squares
+ (ii) The Popper Method Factor
+ (iii) The Brand Factor
+ (iv) The Error (also known as the Sum of Squares Within Groups)
+ (v) The Interaction (also known as the Sum of Squares for Both Factors)

##### Q5 B

Is there a significant effect at the 95% Confidence Level due to each of the Popper Method Factor, the Brand Factor and the Interaction?
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

*Suppose both P1 and P2 are positive. What then is the probability that the patient has the virus? In other words we are asked to find P(H|P1 ^ P2)*

```r
P(H|P1 ^ P2) = P(P1 ^ P2|H) * P(H) / P(P1 ^ P2)

P(P1 ^ P2|H) = ?
P(P1 ^ P2) = ?

#Because the two tests are independant we can say:
P(P1 ^ P2|H) = P(P1|H) * P(P2|H)
P(P1 ^ P2|H) = 0.95 * 0.95

#Now we apply second axom of prob, two senarios
P(P1 ^ P2) = 

1.the patient has the virus and both tests are positive
2.the patient does not have the virus and both tests are positive

P(P1 ^ P2) = P(P1 ^ P2|H)P(H) + P(P1 ^ P2|!H)P(!H)
P(P1 ^ P2) = P(P1|H) * P(P2|H) * P(H) + P(P1|!H) * P(P2|!H) * P(!H)

= 0.95 × 0.95 × 0.15 + 0.02× 0.02 × 0.85
= 0.135715

P(H|P1 ^ P2) = 0.95 * 0.95 * 0.15 / 0.135715
= 0.99749
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

## Normal Distribution

*The normal distribution is defined by the following probability density function, where μ is the population mean and σ2 is the variance.*

In particular, the normal distribution with μ = 0 and σ = 1 is called the standard normal distribution, and is denoted as N(0,1).

### Example(Normal Dist R)

1.Assume that the test scores of a college entrance exam fits a normal distribution. Furthermore, the mean test score is 72, and the standard deviation is 15.2. What is the percentage of students scoring 84 or more in the exam?

We apply the function pnorm of the normal distribution with mean 72 and standard deviation 15.2. Since we are looking for the percentage of students scoring higher than 84, we are interested in the upper tail of the normal distribution.

```r
pnorm(84, mean=72, sd=15.2, lower.tail=FALSE)
```

+ From previous records it is known that examination results are normally distributed with mean µ = 45 and the standard deviation σ = 4.

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

2.An analogue signal received at a detector (measured in microvolts), is normally distributed with a mean of 100 and a variance of 256; X ∼ N(100, 16)

• What is the probability that the signal will be less than 120 microvolts, given that it is larger than 110 microvolts?

```r
P(110 < X < 120) = pnorm(120, mean=100, sd=16) - pnorm(110, mean=100, sd=16)

P(X > 110) = 1 - pnorm(110, mean=100, sd=16)

P(X < 120|X > 110) = P(110 < X < 120)/P(X > 110)
```

3.From previous records scores on an aptitude are normally distributed with mean µ = 500 and standard deviation σ = 100 : X ∼ N(500, 100) What is the probability that an individual’s score exceeds 650, given that it exceeds 500?

```r
P(X > 650|X > 500) = P(X > 650)/P(X > 500)

P(X > 650) = 1 - pnorm(650, mean=500, sd=100) = 0.0668072
P(X > 500) = 1 - pnorm(500, mean=500, sd=100) = 0.5

0.5/0.0668072
```

## Mean and Variance -> Example && R

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

``

7.Now modify the code to include a second blood test on the patient. You can assume that the second test is unaffected by the first test

```r

# It uses an array called virus, which is only
# updated when the patient has a positive test
# It stores a 1 if the patient has the virus
# and stores a 0 if they do not
P1 = 0
P2 = 0
virus = 0
j=1
for (i in 1:100000) {
  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      P1[i] = 1
      virus[j] =1
      j=j+1
    } else P1[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      P1[i] = 1
      virus[j] = 0
      j=j+1
    } else P1[i] = 0
  }

  if (runif(1) <= 0.15) {
    if (runif(1) <= 0.95) {
      P2[i] = 1
      virus[j] =1
      j=j+1
    } else P2[i] = 0
  } else {
    if (runif(1) <= 0.02) {
      P2[i] = 1
      virus[j] = 0
      j=j+1
    } else P2[i] = 0
  }
}
table(P1)
table(P2)
length(virus) #this should be equal to the number of positive tests
sum(virus)/length(virus) # this is an estimate of how frequent the patient has the virus
# given they have a positive test

```

8.Run the code 100,000 times. How often do you get two positive tests? If you get two positive tests, how often does the patient have the virus?

`[1] 0.8949213`

## Sample Lab Two -> Bayes Network

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

1.Whats the probability of heart disease?

H depends on S and D. So we have to compute the probability of H for all 4 combinations of S and D and then add them all together:

```r
P(H) = P(H| S,D) * P(S) * P(D) + P(H| !S,D) * P(!S) * P(D) + P(H| S,!D) * P(S) * P(!D) + P(H| !S,!D) * P(!S) * P(!D)
```

2.High blood pressure

B depends on H. So we have to find the probability of B for all values of H and add them together

```r
P(B) =  P(B|H)P(H) + P(B|!H)P(!H)
```

3.Heart disease given high blood pressure

Bayes Therom

```r
P(H|B) = P(B|H) * P(H) / P(B)
```

4.High blood pressure and an abnormal electrocardiogram

B and E are conditionally independent given H. So we can multiply their conditional probabilities given H. We do the same for not H.

```r
P(B ^ E) = P(B|H)P(E|H)P(H) + P(B|!H)P(E|!H)P(!H)
```

5.Heart disease given high blood pressure and a normal electrocardiogram

We have to repeat the solutions to parts iv and v but we must substitute !E for E

```r
P(B ^ !E) = P(B|H)P(!E|H)P(H) + P(B|!H)P(!E|!H)P(!H)
P(H|B ^ !E) = P(B|H)P(!E|H)P(H) / P(B ^ !E)
```

6.Heart disease given smoking

Since H depends on both S and D we have to consider the case of D and the case of not D and add them together

```r
P(H|S) = P(H|S,D)P(D) + P(H|S,!D)P(!D)
```

7.An abnormal electrocardiogram given smoking

Since E depends on H which in turn depends on S we can write

```r
P(E|S) = P(E|H)P(H|S) + P(E|!H)P(!H|S)
```

8.Heart disease given an abnormal electrocardiogram and smoking

```r
P(H ^ E ^ S) = P(E|H)P(H|S)P(S)
P(E ^ S) = P(E|S)P(S)
P(H|S ^ E) = P(H ^ S ^ E) / P(E ^ S) = P(E|H)P(H|S) / P(E|S)
```

c) How many different combinations of the five node values does the above network have?

5 nodes, 2 values per node(True, False)

`2 x 2 x 2 x 2 x 2 = 32`

d) Can you give a general algorithm for computing any probability of this type?

```r
P(X and Y) = sum of the probabilities of all combinations where X and Y are true
P(Y) = sum of the probabilities of all the combinations where Y is true
P(X|Y) = P(X and Y)/P(Y)
```

e) How would the execution time of your algorithm change if the number of nodes in the network were to be increased?

The execution time would increase exponentially i.e. in proportion to 2 to the power of N, where N is the number of nodes.

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
topWealth <- c(70, 120, 90, 100)
topPop <- c(10, 10, 10, 15)

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

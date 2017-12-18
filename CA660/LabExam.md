# CA660 Lab Exam - Matthew McKenna - 10328467 && David O'Regan - 10331017

## Task 1

```r
trans = matrix(c(0.9,0.09,0.01,0.01,0.9,0.09,0.09,0.01,0.9),3,3)
seq <- 0
seq[1] = 1

for(i in 2:100) {
  randomVariable <- runif(1)
  lastDigit <- seq[i - 1]
  probaility <- trans[, lastDigit]

  if(lastDigit == 1) {
      if(randomVariable <= probaility[3]) {
        seq[i] = 3
      } else if(randomVariable > probaility[3] && randomVariable <= probaility[2]) {
        seq[i] = 2
      } else {
        seq[i] = 1
      }
  } else if(lastDigit == 2) {
    if(randomVariable <= probaility[1]) {
      seq[i] = 1
    } else if (randomVariable > probaility[1] && randomVariable <= probaility[3]) {
      seq[i] = 3
    } else {
      seq[i] = 2
    }
  } else {
    if(randomVariable <= probaility[2]) {
      seq[i] = 2
    } else if (randomVariable > probaility[2] && randomVariable <= probaility[1]) {
      seq[i] = 3
    } else {
      seq[i] = 1
    }
  }
}
seq
```

Print some of the sequences in your report.

```r
> seq
  [1] 1 1 2 2 2 2 3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 2 2 2 3 1 1 1 1 1 1 1 1 1 1 1 1
 [38] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 3
 [75] 1 1 2 2 2 2 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

> seq
  [1] 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 1 1
 [38] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 3 1 1 1 1 1
 [75] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

> seq
  [1] 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 [38] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1
 [75] 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 1 1 1 1 3 1 1 1 1 1 1
```

What do you notice about these sequences? -> Run if is most likely to generate a number above 0.09, which means our current symbol is usually more likely than not to become the next nymbol given the 0.9 probability

Do you get sections, where the same symbol occurs in a row? Why is this? -> Symbols occur in blocks of their own type i.e. if you get a 1, you are 90% likely to get another 1 as the next number in the sequence but for 2, the most likey next symbol is a 2 again.

What would happen if you changed the values of the Transition Probabilities? Try changing them and see how it affects the sequence.

-> Updated transition probabilites do not seem to have much of an affect on the sequence of data generated, the most likely number to be generated is still 1.

```r
trans = matrix(c(0.1,0.9,0.09,0.09,0.1,0.9,0.9,0.1,0.09),3,3)
```

## Task 2

```r
emission = matrix(c(0.9,0.05,0.05,0.05,0.9,0.05,0.05,0.05,0.9),3,3)
hiidenMSeq <- 1
for(i in 2:100) {
  randomVariable <- runif(1)
  hiddenSymbol <- seq[i - 1]
  observable <- emission[, hiddenSymbol]
    if(hiddenSymbol == 1) {
      if(randomVariable > observable[2]) {
        hiidenMSeq[i] = 1
      }

      if (randomVariable <= observable[2]) {
        randomVariable2 <- runif(1)
        if(randomVariable2 <= observable[2]) hiidenMSeq[i] = 2 else hiidenMSeq[i] = 3
      }
  }

  if(hiddenSymbol == 2) {
      if(randomVariable > observable[1]) {
        hiidenMSeq[i] = 2
      }

      if (randomVariable <= observable[1]) {
        randomVariable2 <- runif(1)
        if(randomVariable2 <= observable[1]) hiidenMSeq[i] = 1 else hiidenMSeq[i] = 3
      }
  }

  if(hiddenSymbol == 3) {
      if(randomVariable > observable[1] && randomVariable < 1) {
        hiidenMSeq[i] = 3
      }

      if (randomVariable <= observable[1]) {
        randomVariable2 <- runif(1)
        if(randomVariable2 <= observable[1]) hiidenMSeq[i] = 1 else hiidenMSeq[i] = 2
      }
  }
}

hiidenMSeq
```

Print some of the sequences in your report. You could print out the observed sequence and
compare it with the hidden sequence.

```r
> seq
  [1] 1 1 1 2 2 2 3 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 1 2
 [38] 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 1 1
 [75] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2


> hiidenMSeq
  [1] 0 1 1 1 2 2 2 3 1 3 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 1 1
 [38] 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 2 2 3 1 1 1 1 1 1 1 1 1
 [75] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2
 

variances <- 0
for(i in 1:100) {
  if(seq[i] == hiidenMSeq[i]) variances[i] = 1 else variances[i] = 0
}

table(variances)

variances
 0  1
14 86
 ```

What do you notice about these sequences? They are extremely similar and behave in a similar way, i.e. the current symbol you ar eon is still the most likely next diget to be generated.

How often does the observed sequence differ from the hidden sequence? They do not differ very much as the probability for the hidden value is still very high for the observable.

Why is this? Example -> Our hidden symbol is 1, and now the probability of our observable symbol is 0.9, which means we have a very high chance of seeing a 1 again.

What would happen if you changed the values of the Emission Probabilities? Try changing them and see how it affects the sequence.

```r
trans = matrix(c(0.1,0.5,0.9,0.2,0.6,0.2,0.3,0.7,0.09),3,3)

> hiidenMSeq
  [1] 0 1 3 1 2 2 2 3 1 1 3 3 2 2 2 2 2 2 2 2 2 2 3 2 1 3 2 2 2 2 2 2 2 2 1 3 3
 [38] 2 2 2 2 2 2 2 2 3 1 2 2 2 2 1 2 2 2 2 2 3 2 2 3 2 2 2 1 3 1 2 2 1 1 2 2 1
 [75] 3 2 3 3 2 2 1 3 3 1 2 2 2 1 2 3 3 1 2 2 2 2 3 2 2 2

 variances
 0  1
41 59
```


## Task 3

```r

transmission = matrix(c(0.9,0.09,0.01,0.01,0.9,0.09,0.09,0.01,0.9),3,3)
emission = matrix(c(0.9,0.05,0.05,0.05,0.9,0.05,0.05,0.05,0.9),3,3)

q = matrix(0,3,100)
q[1,1] <- 1
q[2,1] <- 0
q[3,1] <- 0
for(i in 2:100) {
  k <- hiidenMSeq[i + 1]
  print(k)
  q[1, i] = (q[1, i -1] * transmission[1,1] + q[2, i -1] * transmission[2,1] + q[3, i - 1] * transmission[2,1]) * emission[1, k]
  q[2, i] = (q[1, i -1] * transmission[1,2] + q[2, i -1] * transmission[2,2] + q[3, i - 1] * transmission[3,2]) * emission[2, k]
  q[3, i] = (q[1, i -1] * transmission[1,2] + q[2, i -1] * transmission[2,2] + q[3, i - 1] * transmission[3,3]) * emission[3, k]
}

seq
hiidenMSeq
q
```

trans = matrix(c(0.9,0.05,0.05,0.05,0.9,0.05,0.05,0.05,0.9),3,3)
hiidenMSeq <- 1
for(i in 2:100) {
  randomVariable <- runif(1)
  hiddenSymbol <- seq[i - 1]
  observable <- trans[, hiddenSymbol]
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
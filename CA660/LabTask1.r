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
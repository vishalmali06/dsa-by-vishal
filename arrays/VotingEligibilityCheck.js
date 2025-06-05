function eligibleToVote(age) {
  if (age < 1) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(0);
eligibleToVote(10);
eligibleToVote(18);

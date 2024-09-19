var maximumWealth = function (accounts) {
  let richestCustomer = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];

    }


    richestCustomer = Math.max(richestCustomer, customerWealth);
  }
  return richestCustomer;
};

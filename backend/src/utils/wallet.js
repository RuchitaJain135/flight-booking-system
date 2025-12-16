let walletBalance = 50000;

const getWalletBalance = () => walletBalance;

const deductFromWallet = (amount) => {
  if (walletBalance < amount) {
    return false;
  }
  walletBalance -= amount;
  return true;
};

module.exports = {
  getWalletBalance,
  deductFromWallet,
};

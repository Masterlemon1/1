window.addEventListener('load', function () {
  const connectBtn = document.getElementById('connectWallet');
  const walletInfo = document.getElementById('walletInfo');
  
  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    
    connectBtn.addEventListener('click', async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        walletInfo.innerText = `Wallet Connected: ${accounts[0]}`;
      } catch (err) {
        walletInfo.innerText = 'Error connecting to wallet!';
        console.error(err);
      }
    });
  } else {
    walletInfo.innerText = 'Please install MetaMask!';
  }
});

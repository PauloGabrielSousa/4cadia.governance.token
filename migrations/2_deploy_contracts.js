const FGToken = artifacts.require('FGToken');
const FGTokenPreSale = artifacts.require('FGTokenPreSale');
const Oracle = artifacts.require('Oracle');

module.exports = async (deployer, network, accounts) => {

  const name = 'FGToken';
  const symbol = 'FGT';
  const decimals = 8;
  const maxCap = 1000 * 10 ** decimals;
  const rate = 1;
  const walletCFO = '0x2aca7f45a401cdd40ac745248272270095f69ba4';
  const forecastDuration = 7;

  await deployer.deploy(FGToken, name, symbol, decimals, maxCap, forecastDuration);
  await deployer.deploy(Oracle);
  await deployer.deploy(FGTokenPreSale, rate, walletCFO, FGToken.address, Oracle.address);
};

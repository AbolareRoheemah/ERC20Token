import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Web3CXIModule = buildModule("Web3CXIModule", (m) => {

  const token = m.contract("Web3CXI");

  return { token };
});

export default Web3CXIModule;

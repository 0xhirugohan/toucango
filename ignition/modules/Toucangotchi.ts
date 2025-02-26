import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ToucangotchiModule = buildModule("ToucangotchiModule", (m) => {
  // Deploy the Toucangotchi contract
  const toucangotchi = m.contract("Toucangotchi", []);

  return { toucangotchi };
});

export default ToucangotchiModule; 
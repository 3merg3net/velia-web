// Minimal Router ABI (USDC transfers + fee routing through $SYNC later)
export const RouterABI = [
  {
    type: "function",
    name: "send",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "memo", type: "string" },
    ],
    outputs: [{ name: "txId", type: "bytes32" }],
  },
] as const;

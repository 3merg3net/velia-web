// Minimal Escrow ABI (extend as you implement)
export const EscrowABI = [
  // createEscrow(counterparty, token, amount, deadline)
  {
    type: "function",
    name: "createEscrow",
    stateMutability: "nonpayable",
    inputs: [
      { name: "counterparty", type: "address" },
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
    outputs: [{ name: "escrowId", type: "bytes32" }],
  },
  // release(escrowId)
  {
    type: "function",
    name: "release",
    stateMutability: "nonpayable",
    inputs: [{ name: "escrowId", type: "bytes32" }],
    outputs: [],
  },
  // refund(escrowId)
  {
    type: "function",
    name: "refund",
    stateMutability: "nonpayable",
    inputs: [{ name: "escrowId", type: "bytes32" }],
    outputs: [],
  },
  // viewEscrow(escrowId) -> (maker, taker, token, amount, deadline, status)
  {
    type: "function",
    name: "viewEscrow",
    stateMutability: "view",
    inputs: [{ name: "escrowId", type: "bytes32" }],
    outputs: [
      { name: "maker", type: "address" },
      { name: "taker", type: "address" },
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "deadline", type: "uint256" },
      { name: "status", type: "uint8" },
    ],
  },
] as const;

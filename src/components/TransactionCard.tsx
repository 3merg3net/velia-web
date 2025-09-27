export default function TransactionCard({ sender, receiver, amount, memo }:{
  sender:string; receiver:string; amount:string; memo:string;
}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <p><span className="font-bold">{sender}</span> sent{" "}
        <span className="text-blue-500">{receiver}</span></p>
      <p className="text-gray-500 text-sm">{amount} · {memo}</p>
    </div>
  );
}

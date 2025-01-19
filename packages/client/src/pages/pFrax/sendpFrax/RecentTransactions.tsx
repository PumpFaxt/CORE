import AddressBlockavatar from "../../../shared/components/AddressBlockAvatar.tsx";
import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";
import FormatAddress from "../../../shared/components/FormatAddress.tsx";
import Icon from "../../../shared/components/Icon.tsx";

export default function RecentTransactions() {
  return (
    <div className="bg-foreground/5 p-4 rounded-sm flex flex-col">
      <p>Recent</p>
      <FlexSeparator size="md" />
      <div className="flex flex-col gap-y-3">
        {transactionsList.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

const transactionsList = [
  {
    hash: "0x7a5c84f1a8b6b9d94a22e81965a8c514b0d5f55617a6e5d8e8c6c0e223d7f9b2",
    from: "0x2f6a98bfe5b9b2b5eaf44d7af6b69a0df6c23efb",
    to: "0x9e4a59b5db6232f3437bc7d9845a2e7893fa3456",
    value: "0.5",
    timestamp: "2025-01-10T10:15:30Z",
    transaction: "incoming",
  },
  {
    hash: "0x1c3f7b9e7db0bdf48c8c4329e6e1234bf5b2da9f7c3d7e345c1b2a8c5f6d9e1b",
    from: "0x4b8a98cbe4b9c5f6d2b7e2c3f6b8c5d3b5a7e9e6",
    to: "0x8d4a93b5e6b7c8f5d2a9b3e6b7c9e4a5b9f2d3e4",
    value: "1.2",
    timestamp: "2025-01-10T11:25:45Z",
    transaction: "outgoing",
  },
];

function TransactionCard(
  { transaction }: { transaction: typeof transactionsList[0] },
) {
  const isIncoming = transaction.transaction === "incoming";
  const formattedTime = new Date(transaction.timestamp).toLocaleString(
    "en-US",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    },
  );

  return (
    <div className="flex items-center gap-x-3">
      <AddressBlockavatar
        className="w-12 rounded-full aspect-square h-max"
        address={isIncoming ? transaction.from : transaction.to}
      />
      <div className="w-full flex flex-col gap-y-1">
        <FormatAddress address={transaction.hash} />
        <div className="flex items-end gap-x-1 text-sm text-foreground/60">
          <Icon
            name={isIncoming ? "ArrowDown" : "ArrowUp"}
            className={`size-5 rounded-full bg-background p-1 ${
              isIncoming ? "text-green-500" : "text-red-500"
            }`}
          />
          <p>{transaction.value}</p>
          <p>PFRAX</p>
          <FlexSeparator size="full" />
          <p>{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}

import { Card } from "@repo/ui/card";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <Card title={"Balance"}>
      <center>
        <div className="flex justify-between border-b border-slate-300 py-2">
          <div className="text-blue-950 font-medium">Unlocked balance</div>
          <div>{amount / 100} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
          <div className="text-blue-950 font-medium">Total Locked Balance</div>
          <div>{locked / 100} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2 text-xl ">
          <div className="text-blue-950 font-medium">Total Balance</div>
          <div>{(locked + amount) / 100} INR</div>
        </div>
      </center>
    </Card>
  );
};

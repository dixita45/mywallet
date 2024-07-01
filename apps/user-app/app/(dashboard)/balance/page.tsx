import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

export default async function () {
  const balance = await getBalance();

  return (
    <div className="w-screen flex flex-col ">
      <div className="text-4xl underline  text-sky-500 pt-8 mb-5 font-semibold">
        Balance
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <BalanceCard amount={balance.amount} locked={balance.locked} />
        </div>
      </div>
    </div>
  );
}

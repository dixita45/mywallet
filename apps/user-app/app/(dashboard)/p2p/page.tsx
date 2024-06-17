import { SendCard } from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-full">
      <div className="text-4xl underline text-sky-500 pt-8 mb-8 font-semibold w-full ">
        P2P Transfer
      </div>

      <div>
        <SendCard />
      </div>
    </div>
  );
}

import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between border-b px-10 border-slate-300 bg-white">
      <div className="text-2xl flex flex-row text-semibold italic justify-center font-bold text-blue-950 mt-3">
        Pay
        <span className="text-sky-500 font-bold italic flex flex-row">
          TM
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <polygon fill="#388e3c" points="29,4 18,45 40,24"></polygon>
            <polygon fill="#f57c00" points="21,3 10,44 32,23"></polygon>
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-center pt-2 ">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

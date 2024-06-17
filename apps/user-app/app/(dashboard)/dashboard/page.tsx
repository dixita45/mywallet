export default function () {
  return (
    <main className="flex flex-col items-center justify-between pt-7 pl-10 bg-white ">
      <div className="relative w-full max-w-5xl mx-auto bg-white  p-3">
        <div className="text-4xl text-sky-500  pt-3 pl-12 mb-8 font-bold">
          India's Most-loved Payments App
          <div className="text-xl text-black pt-4 mb-4 font-semibold">
            Recharge & pay bills, book flights & movie tickets
            <div className="text-xl text-black pt-2 mb-4 font-semibold">
              Open a savings account, invest in stocks & mutual funds
              <div className="text-xl text-black pt-2 mb-4 font-semibold">
                and do a lot more.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pl-12">
          <div className="text-3xl mb-6 font-bold text-blue-900 underline ">
            Our Features
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2  ">Quick Recharge</div>
              <p className="text-gray-700">Recharge your mobile and DTH instantly with our quick recharge feature.</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:- translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2 ">Bill Payments</div>
              <p className="text-gray-700">Pay your electricity, water, gas, and other utility bills in one place.</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2 ">Book Tickets</div>
              <p className="text-gray-700">Book flight and movie tickets effortlessly with great discounts.</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2 ">Savings Account</div>
              <p className="text-gray-700">Open a digital savings account with high interest rates and no minimum balance.</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2 ">Investments</div>
              <p className="text-gray-700">Invest in stocks and mutual funds with expert advice and low fees.</p>
            </div>
            <div className="bg-sky-100 p-4 rounded-lg shadow-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:[#67e8f9] duration-300 ... cursor-pointer">
              <div className="text-xl text-blue-900  font-semibold mb-2 ">More Features</div>
              <p className="text-gray-700">Explore many more features designed to simplify your financial life.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

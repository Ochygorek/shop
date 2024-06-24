import Image from "next/image";
import { getItems } from "@/app/actions";
import Overlay from "./components/ui/overlay";

export default async function Home() {
  const res: any[] | { errorMessage: any; } = await getItems();
  // console.log(`items are...`, res);

  if ('errorMessage' in res) {
    return (
      <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          Items
        </h1>
        <p>Error: {res.errorMessage}</p>
      </main>
    );
  }

  return (
    <div className="wrapper">
      <div className="aspect-ratio-box">
        <div className="bg-grad"></div>
        <div className="bg-dots"></div>
        <img src="/white-top-animated.svg" className="white-rectangle-top" />
        <img src="/white-bottom-animated.svg" className="white-rectangle-bottom" />
        <div className="content">
          <main className="flex items-center justify-start flex-col w-full">
            <Image
              src="/logo.svg"
              alt="Inside Logo"
              width={208}
              height={56}
              priority
            />
            <h1>SHOP</h1>
            <form className="flex items-start justify-center flex-col mt-4 gap-[8px] w-full">
              {/* <Overlay /> */}
              {res.map((item: any) => (
                <div key={item.id} className="flex justivy-start items-center gap-[12px] w-full">
                  <div className="flex items-center justify-between w-full relative">
                    <p className="whitespace-nowrap mr-1">{item.name.toUpperCase()}</p>
                    <p className="dots"></p>
                    <p className="whitespace-nowrap ml-1">{item.price.toUpperCase()}</p>
                    {item.soldOut && <Image
                      src={"/sold out.svg"}
                      alt="sold out"
                      width={202}
                      height={98}
                      className="absolute right-[0px] bottom-[0] opacity-50"
                    />}
                  </div>
                  {/* {item.soldOut ? <></> :
                    <div className="flex justivy-start items-start flex-col gap-[4px]">
                      <button className="size-[24px] bg-white rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-[24px] text-emerald-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                      <button className="size-[24px] bg-white rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-[24px] text-red-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      </button>
                    </div>
                  } */}
                </div>
              ))}
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

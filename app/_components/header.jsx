import { UserBtn } from "@/components/user-btn/user-btn";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-zinc-300/30">
      <div className="relative h-[40px] w-[40px]">
        <Image src="/crsm.svg" alt="logo" fill className="object-contain" />
      </div>
      <div>
        <UserBtn />
      </div>
    </div>
  );
};

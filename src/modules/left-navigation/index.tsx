import React from "react";
import Logo from "@assets/logo.svg";
import { LeftNavItem } from "../../types";
import { ICON_MAP } from "./constants";

interface LeftNavigationProps {
  leftNavConfig: LeftNavItem[];
  activeKey: string;
  onMenuItemClick?: (value: string) => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  leftNavConfig,
  activeKey,
  onMenuItemClick
}) => {
  return (
    <div className='w-full h-full bg-[#0C365A]'>
      <div className='p-12'>
        <img src={Logo} alt='aspire-logo' className='w-[125px] h-[35px] mb-5' />
        <p className='text-white text-sm opacity-30'>
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <div className='flex flex-col gap-7 mt-8 overflow-y-auto px-4'>
        {leftNavConfig.map((item) => {
          return (
            <LeftNavItemComp
              key={item.key}
              item={item}
              isActive={item.key === activeKey}
              onClick={onMenuItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};


function LeftNavItemComp({
  item,
  isActive,
  onClick
}: {
  item: LeftNavItem;
  isActive: boolean;
  onClick?: (value: string) => void;
}) {
  return (
    <div
      key={item.key}
      className={`flex items-center gap-4 cursor-pointer px-8 py-4 rounded hover:bg-[#1E4A7D] text-${
        isActive ? "brand" : "white"
      }
      font-${isActive ? "bold" : "regular"}`}
      onClick={() => onClick && onClick(item.key)}
    >
      {
        <img
          src={ICON_MAP[item.key] as string}
          alt='icon'
          className={`w-[24px] h-[24px]`}
        />
      }
      <p className='text-sm'>{item.label}</p>
    </div>
  );
}

export default LeftNavigation;

"use client";

import { Navigation, NavigationItem } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  isSubNavigation?: boolean;
};

export function DemoNavigation({ isSubNavigation }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Navigation
      className="w-full"
      variant={isSubNavigation ? "subNavigation" : "mainNavigation"}
      leftNavigationItems={[
        <NavigationItem
          key="1"
          text="Link 1"
          isActive={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        />,
        <NavigationItem
          key="2"
          text="Link 2"
          isActive={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
        />,
        <NavigationItem
          key="3"
          text="Link 3"
          isActive={activeIndex === 3}
          onClick={() => setActiveIndex(3)}
        />,
      ]}
      rightNavigationItems={[
        <NavigationItem
          key="4"
          text="Link 4"
          isActive={activeIndex === 4}
          onClick={() => setActiveIndex(4)}
        />,
        <NavigationItem
          key="5"
          text="Link 5"
          isActive={activeIndex === 5}
          onClick={() => setActiveIndex(5)}
        />,
      ]}
    />
  );
}

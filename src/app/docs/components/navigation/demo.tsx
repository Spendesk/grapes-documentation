"use client";

import { Navigation, NavigationItem } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoNavigation() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Navigation
      className="w-full"
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
    />
  );
}

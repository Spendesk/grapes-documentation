import { Icon, IconName, NavigationItem } from "@dev-spendesk/grapes";
import Link from "next/link";

type Props = {
  isActive?: boolean;
  url: string;
  label: string;
  iconName?: IconName;
};

export function SideBarLink({ isActive, url, label, iconName }: Props) {
  return (
    <NavigationItem
      className="title-m"
      isActive={isActive}
      variant="sideNavigation"
      component={Link}
      href={url}
      text={label}
      leftAddon={
        iconName && (
          <Icon
            className="p-xxs border border-solid border-neutral-lighter rounded-xxs"
            name={iconName}
            size="l"
          />
        )
      }
    />
  );
}

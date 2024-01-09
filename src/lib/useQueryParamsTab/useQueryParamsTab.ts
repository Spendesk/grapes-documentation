import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryParamsTab(
  tabs: string[],
  defaultFallback: string
): [number, (index: number) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? defaultFallback;
  const defaultTabIndex = tabs.indexOf(tab);

  const setQueryParams = useCallback(
    (index: number) => {
      router.replace(`${pathname}?tab=${tabs[index]}`);
    },
    [pathname, router, tabs]
  );

  return [defaultTabIndex, setQueryParams];
}

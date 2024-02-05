import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

/** rtl cache */
const rtlCache = createCache({
  key: "scheduler-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

/** ltr cache */
const ltrCache = createCache({
  key: "scheduler-ltr",
});

interface IDirectionProvider {
  direction: "rtl" | "ltr";
}

const DirectionProvider: React.FunctionComponent<
  React.PropsWithChildren<IDirectionProvider>
> = (props) => {
  const { children, direction } = props;
  return (
    <CacheProvider value={direction === "rtl" ? rtlCache : ltrCache}>
      {children}
    </CacheProvider>
  );
};

export default DirectionProvider;

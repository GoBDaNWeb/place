import compose from "compose-function";
import { withStore } from "./withStore";
import { withLayout } from "./withLayout";
export const withProviders = compose(withStore, withLayout);

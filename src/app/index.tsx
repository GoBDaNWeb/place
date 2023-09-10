import "./index.sass";
import { Main } from "components/pages/Main";
import { withProviders } from "./providers";

const App = () => {
  return <Main />;
};

export default withProviders(App);

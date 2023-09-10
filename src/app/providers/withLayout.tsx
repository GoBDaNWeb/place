import { Layout } from "components/layout/Layout";
import { FC } from "react";

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

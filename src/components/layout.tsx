import { ReactNode, FC } from "react";
import Head from "next/head";
import styles from "../sass/wrapper.module.sass";

export const Layout: FC<{ pageName: string; children: ReactNode }> = ({ pageName, children }) => (
  <>
    <Head>
      <title>{pageName}</title>
    </Head>
    <div className={styles.wrapper}>{children}</div>
  </>
);

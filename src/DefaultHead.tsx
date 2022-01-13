import Head from "next/head";
import React from "react";

export const DefaultHead = () => {
  return (
    <Head>
      <title>Clover - Cross-chain DeFi Interoperability</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        name="description"
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"true"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

import React, {FC} from "react";
import Head from "next/head";

interface AppHeadProps {
    title?: String
}

const AppHead: FC<AppHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>پیش شماره | جستجوی اطلاعات تماس</title>
      <meta name="description" content="پیش شماره - جستجوی اطلاعات تماس" />
    </Head>
  );
}

export default AppHead;

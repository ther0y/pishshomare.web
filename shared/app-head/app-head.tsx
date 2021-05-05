import React, { FC } from "react";
import Head from "next/head";

interface AppHeadProps {
  title?: string;
}

const AppHead: FC<AppHeadProps> = ({ title = "جستجوی اطلاعات تماس" }) => {
  return (
    <Head>
      <title>پیش‌شماره | {title}</title>
      <meta name="description" content="پیش شماره - جستجوی اطلاعات تماس" />
    </Head>
  );
};

export default AppHead;

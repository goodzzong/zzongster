import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Zzongster</title>
      </Head>
      <AppLayout>
        <div>Hello, profile!</div>
      </AppLayout>
    </>
  );
};

export default Profile;

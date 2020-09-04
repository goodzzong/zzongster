import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "듀크온" },
    { nickname: "나타샤" },
    { nickname: "가리" },
  ];
  const followingList = [
    { nickname: "듀크온" },
    { nickname: "나타샤" },
    { nickname: "가리" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Zzongster</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;

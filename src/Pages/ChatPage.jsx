import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import { SideDrawer } from "../components/miscellaneous/SideDrawer";
import { ChatBox } from "../components/ChatBox";
import { MyChats } from "../components/MyChats";

export const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justify="space-between" w="100%" h="91.5vh" p="10%">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

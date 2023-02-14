import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import { ProfileModel } from "./ProfileModel";
import { useNavigate } from "react-router-dom";

export const SideDrawer = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user } = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end" >
          <Button variant="ghost" onClick={onOpen}>
            <BsSearch />
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="work sans">
          Vikash Chat App
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BsBell fontSize="2xl" m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={user?.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModel user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModel>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBotttomWidth="1px"></DrawerHeader>
        </DrawerContent>
        <DrawerBody>
          <Box d="flex" pb={2}></Box>
        </DrawerBody>
      </Drawer>
    </>
  );
};

import { Menu, MenuItem, View } from "@aws-amplify/ui-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="w-screen h-[60px] home-spacing bg-white border-b border-gray-200
     flex items-center justify-between"
    >
      <Link to="/">
        <img
          className="object-cover overflow-clip"
          src="src\assets\image\Arago-logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </Link>
      <div className="font-bold hidden md:flex justify-between space-x-5">
        <Link>Book a task</Link>
        <Link>My Task</Link>
        <Link>Account</Link>
      </div>
      <View className="md:hidden" width="4rem">
        <Menu>
          <MenuItem>
            <Link>Book a task</Link>
          </MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </View>
    </header>
  );
};

export default Header;

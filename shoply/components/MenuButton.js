import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./HeaderButton";

const MenuButton = ({ navOptions }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navOptions.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default MenuButton;

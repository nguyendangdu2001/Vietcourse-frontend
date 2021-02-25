import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useCart } from "../../hooks/useCart";

export const CartButton = () => {
  const [cart] = useCart();
  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <Badge
          badgeContent={cart?.length}
          color="secondary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <ShoppingCartOutlined />
        </Badge>
      </IconButton>
    </Link>
  );
};
export default memo(CartButton);

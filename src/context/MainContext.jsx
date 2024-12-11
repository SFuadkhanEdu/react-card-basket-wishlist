import React, { useState } from "react";
import { ProductsProvider } from "./ProductsContext";
import { BasketProvider } from "./BasketContext";
import { WishlistProvider } from "./WishlistContext";
import { AccessProvider } from "./AccessContext";
import { ThemeProvider } from "./ThemeContext";
function MainContext({ children }) {
  return (
    <ThemeProvider>
    <AccessProvider>
      <WishlistProvider>
        <BasketProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </BasketProvider>
      </WishlistProvider>
    </AccessProvider>
    </ThemeProvider>
  );
}

export default MainContext;

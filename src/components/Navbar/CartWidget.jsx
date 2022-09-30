import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"
import { cartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.paper}`,
    padding: '0 4px',
    background: 'rgb(255, 181, 70)',
  },
}))



function CartWidget() {

  const { getItemCount } = useContext(cartContext);

  return (
    <NavLink to="/cart">
      <IconButton aria-label="cart" >
        <StyledBadge badgeContent={getItemCount()} showZero>
          <ShoppingCartIcon fontSize="large" className="cart" />
        </StyledBadge>
      </IconButton>
    </NavLink>
  );
}

export default CartWidget
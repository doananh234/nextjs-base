import React from 'react';
import PropTypes from 'prop-types';
import { SVGIconWrapper } from './styles';
import Back from '../../static/assets/icon/back.svg';
import DownLoad from '../../static/assets/icon/download.svg';
import Wallet from '../../static/assets/icon/wallet.svg';
import Refund from '../../static/assets/icon/refund.svg';
import Logo from '../../static/assets/icon/logo.svg';
import ArrowRight from '../../static/assets/icon/arrow-right.svg';
import Mobile from '../../static/assets/icon/mobile.svg';
import Cart from '../../static/assets/icon/cart.svg';
import Clock from '../../static/assets/icon/clock.svg';
import Calendar from '../../static/assets/icon/calendar.svg';
import Info from '../../static/assets/icon/info.svg';
import DeleteOrder from '../../static/assets/icon/deleteOrder.svg';
import ListItem from '../../static/assets/icon/listItem.svg';
import GoogleIcon from '../../static/assets/icon/googleIcon.svg';
import defaultUser from '../../static/assets/icon/defaultUser.svg';

const SVG_ICONS = {
  download: DownLoad,
  wallet: Wallet,
  refund: Refund,
  'arrow-right': ArrowRight,
  logo: Logo,
  back: Back,
  mobile: Mobile,
  cart: Cart,
  clock: Clock,
  calendar: Calendar,
  info: Info,
  deleteOrder: DeleteOrder,
  listItem: ListItem,
  google: GoogleIcon,
  defaultUser,
};

function SVGIcon({ name, className, ...props }) {
  const Icon = SVG_ICONS[name] || Logo;
  return (
    <SVGIconWrapper {...props} className={`svgIcon ${className || ''}`}>
      <Icon />
    </SVGIconWrapper>
  );
}

SVGIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

SVGIcon.defaultProps = {
  name: 'logo',
  size: 20,
};

export default SVGIcon;

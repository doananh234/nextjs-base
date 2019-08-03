import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import i18next from 'i18next';
import BrandSection from '../../../components/items/BrandSection';

const DATA = [{
  "id": 1,
  "avatar": "https://robohash.org/adipisciaperiamfacere.bmp?size=50x50&set=set1",
  "name": "Glenden Bonder",
  "value": 46,
  "unit": "BRL"
}, {
  "id": 2,
  "avatar": "https://robohash.org/fugaporroaliquid.png?size=50x50&set=set1",
  "name": "Rhonda Reddlesden",
  "value": 7,
  "unit": "SEK"
}, {
  "id": 3,
  "avatar": "https://robohash.org/repellatomnisest.png?size=50x50&set=set1",
  "name": "Effie Steward",
  "value": 83,
  "unit": "CNY"
}, {
  "id": 4,
  "avatar": "https://robohash.org/corruptideseruntpariatur.jpg?size=50x50&set=set1",
  "name": "Dario Readie",
  "value": 64,
  "unit": "MGA"
}, {
  "id": 5,
  "avatar": "https://robohash.org/aspernaturrerumet.png?size=50x50&set=set1",
  "name": "Ardeen Olivier",
  "value": 6,
  "unit": "CNY"
}, {
  "id": 6,
  "avatar": "https://robohash.org/etconsequunturvero.jpg?size=50x50&set=set1",
  "name": "Arvy Walch",
  "value": 35,
  "unit": "CNY"
}, {
  "id": 7,
  "avatar": "https://robohash.org/deseruntfacereet.jpg?size=50x50&set=set1",
  "name": "Ingelbert Blackney",
  "value": 60,
  "unit": "JPY"
}, {
  "id": 8,
  "avatar": "https://robohash.org/commoditeneturodio.png?size=50x50&set=set1",
  "name": "Barrie Allday",
  "value": 38,
  "unit": "NGN"
}, {
  "id": 9,
  "avatar": "https://robohash.org/nesciuntdeserunteos.png?size=50x50&set=set1",
  "name": "Cilka Shead",
  "value": 57,
  "unit": "IDR"
}, {
  "id": 10,
  "avatar": "https://robohash.org/sequiaperiamet.jpg?size=50x50&set=set1",
  "name": "Xever Wenham",
  "value": 15,
  "unit": "EUR"
}];

const ListCoupons = props => DATA.map((item, index) =><BrandSection data={DATA} key={String(index)} item={item} index={index}/>);
ListCoupons.propTypes = {};

export default ListCoupons;

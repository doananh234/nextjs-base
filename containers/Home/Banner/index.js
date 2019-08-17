import React from 'react';
import { Carousel } from 'antd';
import i18next from 'i18next';
import { BannerWrapper } from './styles';
import BannerItem from '../../../components/items/BannerItem';

const DATA = [
  {
    title: 'MUA SẮM HOÀN TIỀN',
    description: 'CÙNG CASHBAG',
    url: '/left-sidebar/collection',
    image:
      'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-2.jpg',
  },
  {
    title: 'MUA SẮM HOÀN TIỀN',
    description: 'CÙNG CASHBAG',
    url: '/left-sidebar/collection',
    image:
      'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-3.jpg',
  },
  {
    title: 'MUA SẮM HOÀN TIỀN',
    description: 'CÙNG CASHBAG',
    url: '/left-sidebar/collection',
    image:
      'https://res.cloudinary.com/csmenouvo/image/upload/v1558605708/blog-post-1.jpg',
  },
];

const Banner = props => {
  const settings = {
    swipeToSlide: true,
    // centerMode: true,
    draggable: true,
    // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          dots: false,
          centerPadding: '20px',
        },
      },
    ],
  };
  return (
    <BannerWrapper {...props}>
      <h1 className="sectionTitle">{i18next.t('home.shopping')}</h1>
      <Carousel {...settings} autoplay>
        {DATA.map((e, index) => (
          <BannerItem item={e} key={String(index)} />
        ))}
      </Carousel>
    </BannerWrapper>
  );
};
export default Banner;

import React from 'react';
import { Carousel } from 'antd';
import { BannerWrapper } from './styles';

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
  };
  return (
    <BannerWrapper {...props}>
      <Carousel {...settings} autoplay>
        {DATA.map((e, index) => (
          <img
            alt={e.image}
            className="banner"
            src={e.image}
            key={String(index)}
          />
        ))}
      </Carousel>
    </BannerWrapper>
  );
};
export default Banner;

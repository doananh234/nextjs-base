import React from 'react';
import Link from 'next/link';
import { Row, Col, Icon } from 'antd';
import i18next from 'i18next';
import { FooterWrapper } from './styles';
import FooterSubscribe from '../FooterSubscribe/index';
import LogoImage from '../../LogoImage';

const SOCIALS = [
  {
    url: 'https://www.facebook.com/',
    icon: 'facebook',
  },
  {
    url: 'https://www.twitter.com/',
    icon: 'twitter',
  },
  {
    url: 'https://www.instagram.com/',
    icon: 'instagram',
  },
];

const DATA = [
  {
    title: 'my account',
    subMenu: [
      {
        url: '/left-sidebar/collection',
        title: 'womens',
      },
      {
        url: '/left-sidebar/collection',
        title: 'clothing',
      },
      {
        url: '/left-sidebar/collection',
        title: 'featured',
      },
      {
        url: '/left-sidebar/collection',
        title: 'accessories',
      },
    ],
  },
  {
    title: 'why we choose',
    subMenu: [
      {
        url: '#',
        title: 'shipping & return',
      },
      {
        url: '#',
        title: 'secure shopping',
      },
      {
        url: '#',
        title: 'gallary',
      },
      {
        url: '#',
        title: 'affiliates',
      },
      {
        url: '#',
        title: 'contacts',
      },
    ],
  },
  {
    title: 'store information',
    subMenu: [
      {
        url: '#',
        title: 'Multikart Demo Store, Demo store \nIndia 345-659',
        icon: 'fa fa-map-marker',
      },
      {
        url: '#',
        title: 'Call Us: 123-456-7898',
        icon: 'fa fa-phone',
      },
      {
        url: '#',
        title: 'Email Us: Support@Fiot.com',
        icon: 'fa fa-envelope-o',
      },
      {
        url: '#',
        title: 'Fax: 123456',
        icon: 'fa fa-fax',
      },
    ],
  },
];

const Footer = () => (
  <FooterWrapper className="footer-light">
    <FooterSubscribe />
    <Row className="footerContent" gutter={16}>
      <Col md={6}>
        <div className="footer-contant">
          <div className="footer-logo">
            <LogoImage isHighlight />
          </div>
          <br />
          <p>{i18next.t('footer.description')}</p>
          <ul className="socialView">
            {SOCIALS.map(social => (
              <li key={social.url}>
                <Link href={social.url}>
                  <Icon
                    type={social.icon}
                    className={social.icon}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      {DATA.map(item => (
        <Col key={item.title} md={6} sm={12}>
          <div className="sub-title">
            <div className="footer-title">
              <h4>{item.title}</h4>
            </div>
            <div className="footer-contant">
              <ul className="contact-list">
                {item.subMenu.map(e => (
                  <li key={e.title}>
                    {e.icon && <i className={e.icon} />}
                    <a>{e.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    <div className="copyright">{i18next.t('appInfo.footer')}</div>
  </FooterWrapper>
);

export default Footer;

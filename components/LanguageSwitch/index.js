import React from 'react';
import PropTypes from 'prop-types';
import { SwitchWrapper } from './styles';

const DATA = {
  language: [
    {
      title: 'English',
      code: 'en',
    },
    {
      title: 'French',
      code: 'fr',
    },
  ],
  currency: [
    {
      title: 'euro',
      code: '€',
    },
    {
      title: 'rupees',
      code: '₹',
    },
    {
      title: 'pound',
      code: '£',
    },
    {
      title: 'dollar',
      code: '$',
    },
  ],
};

const LanguageSwitch = ({ changeCurrency, changeLanguage }) => (
  <SwitchWrapper>
    <div>
      <img
        src="/static/assets/images/icon/setting.png"
        className="img-fluid"
        alt=""
      />
      <i className="fa fa-cog" />
    </div>
    <div className="show-div setting">
      <h6>language</h6>
      <ul>
        {DATA.language.map(e => (
          <li key={e.title}>
            <a href={null} onClick={() => changeLanguage(e.code)}>
              {e.title}
            </a>
          </li>
        ))}
      </ul>
      <h6>currency</h6>
      <ul className="list-inline">
        {DATA.currency.map(e => (
          <li key={e.title}>
            <a href={null} onClick={() => changeCurrency(e.code)}>
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </SwitchWrapper>
);
LanguageSwitch.propTypes = {
  changeCurrency: PropTypes.func,
  changeLanguage: PropTypes.func,
};

export default LanguageSwitch;

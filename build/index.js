var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import './style/index.css';

export default function ImgIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      img = _ref.img,
      size = _ref.size;

  var iconStyle = {
    backgroundImage: 'url(' + img + ')'
  };

  if (size) {
    if (typeof size === 'string') {
      iconStyle.width = size;
      iconStyle.height = size;
    } else {
      iconStyle.width = size.width;
      iconStyle.height = size.height;
    }
  }

  return React.createElement('i', {
    className: '' + prefixCls,
    style: _extends({
      backgroundImage: 'url(' + img + ')'
    }, iconStyle)
  });
}

var defaultPrefixCls = 'cefc-imgicon';

ImgIcon.defaultProps = {
  prefixCls: defaultPrefixCls,
  size: {
    width: '.21rem',
    height: '.21rem'
  }
};

ImgIcon.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  })]),
  img: PropTypes.string.isRequired
};
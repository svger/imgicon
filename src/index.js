import React from 'react';
import PropTypes from 'prop-types';
import './style/index.less';

export default function ImgIcon({
  prefixCls, img, size
}) {
  let iconStyle = {
    backgroundImage: `url(${img})`
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

  return (
    <i
      className={`${prefixCls}`}
      style={{
        backgroundImage: `url(${img})`,
        ...iconStyle
      }}
    />
  );
}

const defaultPrefixCls = 'cefc-imgicon';

ImgIcon.defaultProps = {
  prefixCls: defaultPrefixCls,
  size: {
    width: '.21rem',
    height: '.21rem'
  }
}

ImgIcon.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired
    })
  ]),
  img: PropTypes.string.isRequired
}
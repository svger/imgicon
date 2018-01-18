import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ImgIcon({
  prefixCls, className, img, size
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
      className={`${prefixCls} ${className}`}
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
  className: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired
    })
  ]),
  img: PropTypes.string.isRequired
}

export default styled(ImgIcon)`
  &.${defaultPrefixCls} {
    display: inline-block;
    font-size: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
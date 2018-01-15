'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ImgIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImgIcon(_ref) {
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

  return _react2.default.createElement('i', {
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
  prefixCls: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    width: _propTypes2.default.string.isRequired,
    height: _propTypes2.default.string.isRequired
  })]),
  img: _propTypes2.default.string.isRequired
};
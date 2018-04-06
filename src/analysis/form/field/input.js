import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuestionSquare from '@fortawesome/fontawesome-pro-solid/faQuestionSquare';
import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input } from 'antd';

import InfoModal from './info-modal';

import './field.css';

/* input menu wrapped in Ant design's <FormItem>, whose initial state will
** be set from the redux store's 'input' */

const FormItem = Form.Item;

const CustomInput = ({
  helpMessage,
  input,
  label,
  meta,
  onChange,
  placeHolder,
  required,
  style,
  type,
}) => {
  const { error, touched } = meta;
  const formError = required && touched && error;
  return (
    <div className="CustomField-container">
      <FormItem
        className="CustomField-formItem"
        label={label}
        help={formError ? error : ''}
        validateStatus={formError ? 'error' : ''}
      >
        <Input
          onChange={(value) => { onChange(value, input); }}
          placeholder={placeHolder}
          style={style}
          type={type}
          value={input.value || undefined}
        />
      </FormItem>
      {
        helpMessage &&
        <FontAwesomeIcon
          className="CustomField-help"
          icon={faQuestionSquare}
          onClick={() => { InfoModal(label || 'Help', helpMessage); }}
          size="2x"
        />
      }
    </div>
  );
};

CustomInput.defaultProps = {
  helpMessage: null,
  label: null,
  placeHolder: 'Select',
  required: false,
  style: {},
  type: 'text',
};

CustomInput.propTypes = {
  helpMessage: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    warning: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  required: PropTypes.bool,
  style: PropTypes.shape({}),
  type: PropTypes.string,
};

export default CustomInput;
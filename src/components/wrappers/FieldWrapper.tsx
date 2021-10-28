import React, { useCallback } from 'react';
import { isNil, equals } from 'ramda';


export const FieldWrapper: React.FC<any> = (props) => {

  const onChange = useCallback((eventOrValue: any, value: any) => {
    const {componentProps: {afterOnChange}, input} = props;
    const onChangeValue = value ? value : eventOrValue;
    input.onChange(onChangeValue);
    if (afterOnChange) afterOnChange();
  }, [props]);

  const onBlur = useCallback(() => {
    const {input} = props;
    input.onBlur();
  }, [props]);

  const getProps = (props: any) => {
    const {
      input, componentProps,
      valuePropertyName, onChangePropertyName, componentDefaultValue
    } = props;

    return {
      ...input,
      ...componentProps,
      [onChangePropertyName]: onChange,
      [valuePropertyName]:
        equals(input.value, '')
          ? !isNil(componentDefaultValue) ? componentDefaultValue : null
          : input.value,
      onBlur: onBlur,
    };
  };

  const {fieldComponent, children} = props;
  const componentProps = getProps(props);

  return (
    <>
      {React.createElement(fieldComponent, componentProps, children)}
    </>
  );

};

import React from "react";
import { Field } from "redux-form";

export interface IGenericFieldWrapperProps {
  fieldComponent?: any;
  component: any;
  valuePropertyName?: string;
  onChangePropertyName?: string;
  showErrorMessage?: boolean;
  errorMessageClassName?: string;
  warningMessageClassNames?: string;
  componentDefaultValue?: any;
}

export const withField = (fieldProps: IGenericFieldWrapperProps) => (props: any) => {
  const {
    name, validate, warn, format,
    parse, normalize, ...componentProps
  } = props;

  return (
    <Field
      name={name}
      validate={validate}
      warn={warn}
      format={format}
      parse={parse}
      normalize={normalize}


      componentProps={componentProps}
      {...fieldProps} />
  );
};

import * as React from "react";
import { FormName } from 'redux-form';
import { curry } from "ramda";

export const withFormName: any = curry((props: any, component: any) => (
  <FormName>
    {({form}) => (
      React.createElement(component, {...props, form})
    )}
  </FormName>
));

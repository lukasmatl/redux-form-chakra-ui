import React from "react";
import {reduxForm} from "redux-form";

const ReduxFormWrapper: React.FC<any> = ({children}) => <>{children}</>

export default reduxForm({
    form: 'storyForm',
    enableReinitialize: true,
})(ReduxFormWrapper);
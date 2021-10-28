import { Checkbox  as ChakraCheckbox, CheckboxProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Checkbox = (props: CheckboxProps) => withField({
    fieldComponent: ChakraCheckbox,
    valuePropertyName: 'checked',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);
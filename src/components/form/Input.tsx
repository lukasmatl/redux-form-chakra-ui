import { Checkbox  as ChakraInput, InputProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Input = (props: InputProps) => withField({
    fieldComponent: ChakraInput,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);
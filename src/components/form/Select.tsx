import { Select  as ChakraSelect, SelectProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Select = (props: SelectProps) => withField({
    fieldComponent: ChakraSelect,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);

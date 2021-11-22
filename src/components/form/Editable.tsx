import { Editable  as ChakraEditable, EditableProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Editable = (props: EditableProps) => withField({
    fieldComponent: ChakraEditable,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);

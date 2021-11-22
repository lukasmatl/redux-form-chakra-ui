import { PinInput  as ChakraPinInput, PinInputProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const PinInput = (props: PinInputProps) => withField({
    fieldComponent: ChakraPinInput,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);


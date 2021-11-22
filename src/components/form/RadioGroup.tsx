import { RadioGroup  as ChakraRadioGroup, RadioGroupProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const RadioGroup = (props: RadioGroupProps) => withField({
    fieldComponent: ChakraRadioGroup,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);





import { Switch  as ChakraSwitch, SwitchProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Switch = (props: SwitchProps) => withField({
    fieldComponent: ChakraSwitch,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);
import { Slider  as ChakraSlider, SliderProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const Slider = (props: SliderProps) => withField({
    fieldComponent: ChakraSlider,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);
import { RangeSlider  as ChakraRangeSlider, RangeSliderProps} from '@chakra-ui/react';
import {FieldWrapper} from '../wrappers/FieldWrapper';
import {withField} from "../hocs";


export const RangeSlider = (props: RangeSliderProps) => withField({
    fieldComponent: ChakraRangeSlider,
    valuePropertyName: 'value',
    onChangePropertyName: 'onChange',
    component: FieldWrapper
})(props);

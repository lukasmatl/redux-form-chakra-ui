import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import {ChakraProvider, Stack} from "@chakra-ui/react";

import { Checkbox } from '../components/form';
import { rootReducer } from './commons/rootReducer';
import { configureStore } from './commons/configureStore';
import ReduxFormWrapper from './commons/ReduxFormWrapper';

const store: any = configureStore(rootReducer, {});


export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) =>
    <Provider store={store}>
        <ReduxFormWrapper>
            <ChakraProvider>
                <Stack>
                    <Checkbox {...args} />
                </Stack>
            </ChakraProvider>
        </ReduxFormWrapper>
    </Provider>

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  name: 'basicName',
  children: (<>Basic Name</>),
};

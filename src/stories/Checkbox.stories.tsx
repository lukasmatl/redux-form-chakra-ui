import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Checkbox} from "../components/form";

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) =>
    <Checkbox {...args} />

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
    name: 'basicName',
    children: ['Basic Name'],
};

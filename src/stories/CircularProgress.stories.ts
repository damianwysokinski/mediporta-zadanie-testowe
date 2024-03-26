import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from "@mui/material";

const meta = {
    title: 'Components/CircularProgress',
    component: CircularProgress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
            control: {
                type: 'select',
            },
            description: 'The color of the component.',
        },
        disableShrink: {
            control: {
                type: 'boolean'
            },
            description: 'If `true`, the shrink animation is disabled. This only works if variant is `indeterminate`.'
        },
        size: {
            control: {
                type: 'number',
            },
        },
        thickness: {
            control: {
                type: 'number',
            },
            description: 'The thickness of the circle.'
        },
        value: {
            control: {
                type: 'number',
                max: 100,
            },
            description: 'The value of the progress indicator for the determinate variant.'
        },
        variant: {
            options: ['determinate', 'indeterminate'],
            control: {
                type: 'select',
            },
            description: 'The variant to use. Use indeterminate when there is no progress value.',
        },
    },
    args: {

    },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'primary',
        disableShrink: false,
        size: 40,
        thickness: 3.6,
        value: 0,
        variant: 'indeterminate'
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from "@mui/material";

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
          control: {
              type: 'text'
          },
          description: 'The content of the component.'
        },
        color: {
            options: ['error', 'info', 'success', 'warning'],
            control: {
                type: 'select',
            },
            description: 'The color of the component.',
        },
        variant: {
            options: ['filled', 'outlined', 'standard'],
            control: {
                type: 'select',
            },
            description: 'The variant to use.',
        },
    },
    args: {

    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Error fetching data: Network Error',
        color: 'error',
        variant: 'standard'
    },
};

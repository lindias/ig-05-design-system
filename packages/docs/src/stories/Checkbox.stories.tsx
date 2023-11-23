import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          gap: '$2',
          alignItems: 'center',
        }}
      >
        {Story()}
        <Text size="sm">Accept terms and conditions</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

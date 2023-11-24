import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { UserCircle } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text size="sm">Email address</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: {
      value: UserCircle,
      size: 24,
    },
    placeholder: 'Type your name',
  },
}

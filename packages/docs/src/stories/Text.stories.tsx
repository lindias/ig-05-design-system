import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore mollitia dolore quod iure pariatur esse provident minima quia, consectetur consequatur repudiandae? Et odit corrupti totam voluptatem? Quidem iure praesentium in.',
    size: 'base',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}

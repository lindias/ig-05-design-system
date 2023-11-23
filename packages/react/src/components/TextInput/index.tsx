import { ComponentProps, ElementType } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

type IconProps = {
  value: ElementType
  size: number
  weight?: 'thin' | 'light' | 'bold' | 'fill' | 'duotone'
}

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
  icon?: IconProps
}

export function TextInput({ prefix, icon: Icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {!!Icon && <Icon.value size={Icon.size} weight={Icon.weight} />}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'

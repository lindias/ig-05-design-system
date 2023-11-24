import { ComponentProps, ElementRef, ElementType, forwardRef } from 'react'
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

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, icon: Icon, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        {!!Icon && <Icon.value size={Icon.size} weight={Icon.weight} />}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

import { ComponentProps } from "react";

import { User } from "phosphor-react";

import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export type AvatarProps = ComponentProps<typeof AvatarImage>;

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={700}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";

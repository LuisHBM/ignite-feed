import "./Avatar.scss";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt = ''}: AvatarProps) {
  return (
    <img
      className={hasBorder ? "avatarWithBorder" : "avatar"}
      src={src}
      alt={alt}
    />
  );
}

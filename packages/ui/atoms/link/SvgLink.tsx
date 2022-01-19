import { CSSProperties } from 'react';
import styled from '@emotion/styled';

type SvgLinkWrapperProps = {
  size?: string;
};

type SvgLinkProps = {
  label: string;
  url: string;
  size: string;
  style?: CSSProperties;
  className?: string;
  SvgIcon: React.FC<any>;
};

const SvgLinkWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: inherit;
  display: flex;
  justify-content: center;
  transition: color 0.3s ease, background-color 0.3s ease;

  height: ${(props: SvgLinkWrapperProps) => props.size || `12px`};
  width: ${(props: SvgLinkWrapperProps) => props.size || `12px`};

  & svg {
    &:hover {
      opacity: 0.5;
    }

    ${(props: SvgLinkWrapperProps) =>
      props.size
        ? `
        height: ${props.size};
        width: ${props.size}
    `
        : ``}
  }
`;

export const SvgLink = ({
  label,
  url,
  size,
  style,
  className,
  SvgIcon,
  ...rest
}: SvgLinkProps) => (
  <SvgLinkWrapper size={size}>
    <a
      {...rest}
      href={url}
      className={className}
      style={style}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <SvgIcon />
    </a>
  </SvgLinkWrapper>
);

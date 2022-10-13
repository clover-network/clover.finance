import styled from 'styled-components'

export const NormalButton = styled.div<{
  width?: string
  height?: string
  margin?: string
  disabled?: boolean
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '64px')};
  min-width: fit-content;
  white-space: nowrap;
  --c1: #BDFDE2;
  --c2: #9BDAF6;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
  border-radius: 32px;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #0C0B0B;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    --x: 100%;
  }

  &:disabled {
    cursor: unset;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    opacity: 0.5;
  }
`
export const GrayButton = styled.div<{
  width?: string
  height?: string
  margin?: string
  color?: string
  disabled?: boolean
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '64px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  color: ${({ color }) => (color ? color : '#FFFFFF')};
  min-width: fit-content;
  white-space: nowrap;
  border: 1px solid #333232;
  border-radius: 32px;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.006em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  transition: 0.3s;

  svg {
    width: 20px;
  }
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    border: 1px solid ${({ disabled }) => (disabled ? '#333232' : '#ffffff')};
  }
`

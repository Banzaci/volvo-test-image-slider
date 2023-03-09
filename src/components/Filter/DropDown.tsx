import { ChangeEventHandler, CSSProperties } from 'react';

type DropDownType = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  items: string[];
  defaultTitle: string;
  style?: CSSProperties
}

const Item = (id: string) => <option value={id} aria-label={id}>{id}</option>;

const DropDown = ({ onChange, items, defaultTitle, style }: DropDownType) => (
  <select onChange={onChange} style={{ width: '100%', padding: '6px 0', ...style }}>
    <option value="-1">{defaultTitle}</option>
    {items.map(Item)}
  </select>
)

export default DropDown
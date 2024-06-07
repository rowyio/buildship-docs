import cn from 'clsx';
import { useState } from 'react';

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CodeIcon from '@mui/icons-material/Code';

import IconFromPath from './IconFromPath';
import styles from './style.module.css';

async function getNodeConfig(id, version) {
  const url = `https://api.buildship.run/library/resolve-node?nodeRefId=${id}&nodeVersion=${version}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

export default function Node({ id, version }: { id: string; version: string }) {
  const [config, setConfig] = useState(null);

  if (!config) {
    getNodeConfig(id, version).then((data) => {
      setConfig(data);
    });
  }

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.header)}>
        <ArrowDropDownIcon className={cn(styles.icon)} />
        {config.meta.icon.type === 'SVG' ? (
          <IconFromPath svgString={config.meta.icon.svg} className={cn(styles.svgIcon)} />
        ) : (
          <img src={config.meta.icon.url} className={cn(styles.svgIcon)} />
        )}
        <span className={cn(styles.title)}>{config.meta.name}</span>
        <PlayArrowOutlinedIcon className={cn(styles.icon)} />
        <CodeIcon className={cn(styles.icon)} />
        <MoreHorizIcon
          className={cn(styles.icon)}
          style={{
            marginRight: 0,
          }}
        />
      </div>
      <div className={cn(styles.content)}>
        {Object.entries(config.inputs.properties ?? {}).map(([key, value], i) => (
          <div className={cn(styles.row)}>
            <label className={cn(styles.label)}>
              {/* @ts-ignore */}
              {value.title}
            </label>
            <div className={cn(styles.inputContainer)}>
              <div className={cn(styles.input)}>Value</div>
              <div className={cn(styles.editIcon)}>
                <EditOutlinedIcon className={cn(styles.editIconColor)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

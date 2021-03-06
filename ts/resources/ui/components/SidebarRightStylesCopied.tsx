import React from 'react';
import ThemeContext from './ThemeContext';

interface SidebarRightStylesCopiedProps {
  copied: boolean;
}

const SidebarRightStylesCopied = (props: SidebarRightStylesCopiedProps) => {
  const { copied } = props;
  return (
    copied
    ? <ThemeContext.Consumer>
        {(theme) => (
          <div
            className='c-sidebar-right__style-copy c-sidebar-right__style-copy--copied'
            style={{
              color: theme.text.onPrimary,
              background: theme.background.z3
            }}>
            <span className='c-sidebar-right__style-copy-text'>
              Copied!
            </span>
            <div
              className='c-sidebar-right__style-copy-bg'
              style={{background: theme.palette.primary}} />
          </div>
        )}
      </ThemeContext.Consumer>
    : null
  );
}

export default SidebarRightStylesCopied;
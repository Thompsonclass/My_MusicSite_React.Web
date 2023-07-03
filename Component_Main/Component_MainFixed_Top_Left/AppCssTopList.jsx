import React, { memo } from 'react';

const AppCssTopList = memo(({ children }) => {
  const TopList = {
    background: 'pink',
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const linkStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
  };

  return (
    <div style={TopList}>
      {React.Children.map(children, (child, index) => (
        <div style={{ position: 'relative' }}>
          {child}
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
            <Link to={child.props.to} className="linkStyle" style={linkStyle}>
              {child.props.children}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
});

export default AppCssTopList;
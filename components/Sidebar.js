const Sidebar = () => {
    return (
      <div className="sidebar" style={{ width: '200px', backgroundColor: 'lightgray' }}>
        {/* Sidebar content */}
      </div>
    );
  };
  
  const Layout = ({ children }) => {
    return (
      <div className="layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content" style={{ flex: 1 }}>
          {children}
        </div>
      </div>
    );
  };
  
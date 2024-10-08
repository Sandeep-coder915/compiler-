import React from 'react';

const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-switcher">
      <button className={activeTab === 'web' ? 'active' : ''} onClick={() => setActiveTab('web')}>
        Web (HTML/CSS/JS)
      </button>
      <button className={activeTab === 'python' ? 'active' : ''} onClick={() => setActiveTab('python')}>
        Python
      </button>
      <button className={activeTab === 'cpp' ? 'active' : ''} onClick={() => setActiveTab('cpp')}>
        C++
      </button>
    </div>
  );
};

export default TabSwitcher;

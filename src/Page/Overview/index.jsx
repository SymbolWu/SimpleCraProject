import React from 'react';
import { Button } from 'antd';

const Index = (props) => {
  console.log(window.location);

  const handleReload = () => {
    window.location.reload();
  }

  const handleGetSearch = () => {
    const { search } = window.location;
    console.log('search:', search);
  }

  const handleNavigator = () => {
    console.log('navigator:', navigator);
  }

  return (
    <div>
      Overview
      <Button type="primary" onClick={handleReload}>Reload</Button>
      <Button type="primary" onClick={handleGetSearch}>GetSearch</Button>
      <Button type="primary" onClick={handleNavigator}>Navigator</Button>
    </div>
  )
}

export default Index;
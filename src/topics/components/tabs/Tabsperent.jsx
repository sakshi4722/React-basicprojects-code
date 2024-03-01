import React from 'react'
import Tabschild from './Tabschild';

const Tabsperent = () => {
    const tabsdata = [
        { title: 'Tab 1', content: <div>This is Tab 1 content</div> },
        { title: 'Tab 2', content: <div>This is Tab 2 content</div> },
        { title: 'Tab 3', content: <div>This is Tab 3 content</div> },
        { title: 'Tab 4', content: <div>This is Tab 4 content</div> },

      ];
      return (
    <div>
     <Tabschild tabs={tabsdata}/>   
    </div>

  )
}

export default Tabsperent
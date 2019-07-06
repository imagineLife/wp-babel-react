import React from 'react'
import './index.css'
import ResponsiveWrapper from './ResponsiveWrapper'
import useWindowSize from './Hooks/UseWindowSize';

let boxesArr = [

  // ROW 1
  [
    {
      class: 'col-2',
      box: 'orange',
      txt: '2 columns'
    },
    {
      class: 'col-2',
      box: 'blue',
      txt: '2 columns'
    },
    {
      class: 'col-2',
      box: 'green',
      txt: '2 columns'
    },
    {
      class: 'col-2',
      box: 'black',
      txt: '2 columns'
    },
    {
      class: 'col-2',
      box: 'black',
      txt: '2 columns'
    },
    {
      class: 'col-2',
      box: 'black',
      txt: '2 columns'
    }
  ],

  // ROW 2
  [
    {
      class: 'col-2-3',
      box: 'orange',
      txt: '2-3 columns'
    },
    {
      class: 'col-2-3',
      box: 'blue',
      txt: '2-3 columns'
    },
    {
      class: 'col-2-3',
      box: 'green',
      txt: '2-3 columns'
    },
    {
      class: 'col-2-3',
      box: 'green',
      txt: '2-3 columns'
    }
  ],

  // ROW 3
  [
    {
      class: 'col-3',
      box: 'orange',
      txt: '3 columns'
    },
    {
      class: 'col-3',
      box: 'blue',
      txt: '3 columns'
    },
    {
      class: 'col-3',
      box: 'green',
      txt: '3 columns'
    },
    {
      class: 'col-3',
      box: 'green',
      txt: '3 columns'
    }
  ]
]

const ResponsiveBoxes = () => {

  const size = useWindowSize()
  
  return(
    <main role="main">

    {boxesArr.map((boxArr, ind) => {
      return(
        <div 
        key={`boxRow${ind}`}
        className="row">
        {boxArr.map((b,idx) => {
          return(
            <ResponsiveWrapper 
            key={`individualBox${idx} row${ind}`}
            boxWrapperClass={b.class}
            boxClassName={b.box}
            boxTxt={b.txt}
            parentSize={size}/>
          )
        })}
      </div>)
    })}

    <div className="row">
      <div className="col-4">
        <div className="box orange">4 columns</div>
      </div>
      <div className="col-4">
        <div className="box blue">4 columns</div>
      </div>
      <div className="col-4">
        <div className="box green">4 columns</div>
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <div className="box orange">6 columns</div>
      </div>
      <div className="col-6">
        <div className="box blue">6 columns</div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="box orange">12 columns</div>
      </div>
    </div>

  </main>)
}

export default ResponsiveBoxes;
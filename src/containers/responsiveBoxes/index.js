import React from 'react'
import './index.css'

let boxesArr = [
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
  ]
]

const ResponsiveBoxes = () => {
    console.log('boxesArr')
    console.log(boxesArr)
    
  return(
    <main role="main">

    {boxesArr.map((boxArr, ind) => {
      return(
        <div 
        key={`boxRow${ind}`}
        className="row">
        {boxArr.map((b,idx) => {
          return(
            <div key={`individualBox${idx} row${ind}`}className={b.class}>
              <div className={`box ${b.box}`}>{b.txt}</div>
            </div>)
        })}
      </div>)
    })}

    <div className="row">
      <div className="col-2-3">
        <div className="box orange">2-3 columns</div>
      </div>
      <div className="col-2-3">
        <div className="box blue">2-3 columns</div>
      </div>
      <div className="col-2-3">
        <div className="box green">2-3 columns</div>
      </div>
      <div className="col-2-3">
        <div className="box black">2-3 columns</div>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <div className="box orange">3 columns</div>
      </div>
      <div className="col-3">
        <div className="box blue">3 columns</div>
      </div>
      <div className="col-3">
        <div className="box green">3 columns</div>
      </div>
      <div className="col-3">
        <div className="box black">3 columns</div>
      </div>
    </div>

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
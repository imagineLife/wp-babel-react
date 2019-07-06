import React from 'react'
import './index.css'

const ResponsiveBoxes = () => {
  return(
    <main role="main">

    <div className="row">
      <div className="col-2">
        <div className="box orange">2 columns</div>
      </div>
      <div className="col-2">
        <div className="box blue">2 columns</div>
      </div>
      <div className="col-2">
        <div className="box green">2 columns</div>
      </div>
      <div className="col-2">
        <div className="box black">2 columns</div>
      </div>
      <div className="col-2">
        <div className="box black">2 columns</div>
      </div>
      <div className="col-2">
        <div className="box black">2 columns</div>
      </div>
    </div>

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
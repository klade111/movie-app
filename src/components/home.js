import React, { Component } from 'react'
import { Input, Rate } from 'antd';
import MyModal from './Modal'

import './home.css'
import Card from './card'

const myData = [{
  name: 'Star Wars',
  img: 'https://media.melty.fr/pmedia-4011986-ajust_700/rendez-vous-le-18-decembre-pour-star-wars.jpg',
  rate: 3
}, {
  name: 'robin des bois',
  img: 'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/unnamed-9_1.jpg?1543160102',
  rate: 2
}, {
  name: 'joker',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY679_.jpg',
  rate: 3
}]



export default class Home extends Component {
  state={
    myData,
    rate:0,
    search:''
  }

  handleRate=(v)=>{
  this.setState({rate:v})
  }
  handleData=(val)=>{
const newData = this.state.myData
newData.push(val)
this.setState({myData:newData})
  }
  handleSearch=(e)=>{
    this.setState({search:e.target.value})
  }
 
  render() {
    return (
      <div className='home'>
        <div className='homeheader'>
          <Input onChange={this.handleSearch} style={{ width: '500px' }} />
          <Rate onChange={this.handleRate}/>
        </div>
        <div className='homebody'>
          {this.state.myData.filter(el=>(el.rate>=this.state.rate)&&(el.name.includes(this.state.search))).map((el, i) => {
            return <Card name={el.name} rate={el.rate} img={el.img} />
          })}
        </div>
        <div className='homefooter'>
          <MyModal handleData={this.handleData} />
        </div>
      </div>

    )
  }
}

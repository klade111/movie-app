import React, { Component } from 'react'
import {  Rate } from "antd";
import './card.css'





export default class Card extends Component {
    render() {
        return (
         <div>
            <div className='card'>
            
              <div>{this.props.name}</div>
              <img className='img' src={this.props.img} alt=''/>
              <div> <Rate value={this.props.rate}/></div>
             
              
              
            </div>
        </div>
            
        )
    }
}

import React, { Component } from 'react'
import $ from 'jquery'
import colors from '../data/colors.js'
import quotes from '../data/data.js'

class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
            accentColor: 'grey',
        }
        this.generateNewQuote = this.generateNewQuote.bind(this)
    }
    

    generateNewQuote = () => {
        let rand = Math.floor(quotes.length * Math.random())
        this.setState({
            quote: quotes[rand].quote,
            author: quotes[rand].author,
            accentColor: colors[Math.floor(Math.random() * 10)]
        })       
    }
 

  render() {

    $('#text').animate({ opacity: 0 }, 0, function () {
        $(this).animate({ opacity: 1 }, 500);
      }) 
  
      $('#author').animate({ opacity: 0 }, 0, function () {
        $(this).animate({ opacity: 1 }, 500);
      })     

    return (
        <section style={{backgroundColor: this.state.accentColor}} id="main_sec">
        <div id="quote-box" style={
          {color:this.state.accentColor}}>

            {
              this.state.author && this.state.quote &&
          <div id="content">
              <h3 id="text" style={{color: this.state.accentColor}}><sup><i className='fa-solid fa-quote-left'></i></sup>{this.state.quote}</h3>
              <p id="author"> - {this.state.author}</p>
          </div>
            }
          <div id="actionButtons">
            <div id="share-icons">
                <a style={{backgroundColor:this.state.accentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`)} target="_blank" rel="noreferrer" title="Share on twitter"  id='tweet-quote'><i className='fa-brands fa-twitter'></i></a>
                <a style={{backgroundColor:this.state.accentColor}} 
                href={encodeURI(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${this.state.author}&content=${this.state.quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`)} 
                target="_blank" rel="noreferrer" title="Share on tumblr" id='tumblr-quote'><i className='fa-brands fa-tumblr'></i></a>
            </div>
            <button id='new-quote' onClick={this.generateNewQuote} style={{backgroundColor:this.state.accentColor}}>New quote</button>
          </div>
        </div>
          <div id="developer">
            <p>by George Igboanugo</p>
          </div>
      </section>
    )
  }
}

export default Quote
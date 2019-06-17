import React from 'react';

class Meme_Generator extends React.Component {
    constructor() {
        super();
        // initialize the state
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
        // bind this to the handleChange method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // API call
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            this.setState(() => {
                return {
                    allMemeImgs: response.data.memes
                }
            })
            console.log(this.state.allMemeImgs);
        })
    }

    handleChange(event){
        // set state based on user input
        const {name, value} = event.target; // pull the name and the value from the event.target
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        // prevent page reload
        event.preventDefault();
        // generate random number
        const randNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
        // pick the random image
        const pickedImg = this.state.allMemeImgs[randNumber].url;
        // update the state for the random image
        this.setState(() => {
            return {
                randomImage: pickedImg
            }
        })
    }

    render() {
        
        return (
            <div>
            <form className='meme-form' onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.topText} onChange={this.handleChange} name='topText' placeholder='top text'/>
                <br />
                <input type='text' value={this.state.bottomText} onChange={this.handleChange} name='bottomText' placeholder='bottom text'/>
                <button>Gen</button>
            </form>
            <div className='meme'>
                <img src={this.state.randomImage} alt='' />
                <h2 className='top'>{this.state.topText}</h2>
                <h2 className='bottom'>{this.state.bottomText}</h2>
            </div>
            </div>
        );
    }
}

export default Meme_Generator;
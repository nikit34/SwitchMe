import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from "./tweets";
import * as serviceWorker from './serviceWorker';


const appEl = document.getElementById('root')
if(appEl){
    ReactDOM.render(<App />, appEl);
}

const e = React.createElement
const tweetsEl = document.getElementById("switchme-2")
if(tweetsEl){
    ReactDOM.render(e(TweetsComponent, tweetsEl.dataset), tweetsEl)
}

const tweetsFeedEl = document.getElementById("switchme-2-feed")
if(tweetsFeedEl){
    ReactDOM.render(e(FeedComponent, tweetsFeedEl.dataset), tweetsFeedEl)
}

const tweetDetailElements = document.querySelectorAll(".switchme-2-detail")
tweetDetailElements.forEach(container => {
    ReactDOM.render(e(TweetDetailComponent, container.dataset), container)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

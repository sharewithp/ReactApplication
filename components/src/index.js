import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App= () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
        <h1>Warning!</h1>
        <div>Are you sure you want to do this</div>
        </ApprovalCard>
        
        <ApprovalCard>
        <CommentDetail author="Sam" 
        timeAgo="Today at 6:00AM" 
        content="Nice blog post!"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="Alex" 
        timeAgo="Yesterday at 7:00PM" 
        content="I like the subject"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="Jean" 
        timeAgo="Today at 8:00PM" 
        content="I like the writing"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        
        </div>
    );
};
ReactDOM.render(<App />,document.querySelector('#root'))


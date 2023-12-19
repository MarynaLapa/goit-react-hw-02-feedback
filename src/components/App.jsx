import Statistics from "./Statistics";
import FeedbackOptions from './FeedbackOptions'
import { Component } from "react";
import Section from "./Section";
import Notification from "./Notification";
import GlobalStyles from "./styled/global.js"


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    heandlerClick = (e) => {
        const buttonName = e.target.name; 
        this.setState(prev => ({
            [buttonName]: prev[buttonName] + 1
        }))
  }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return this.state.good > 0 ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0;
    }

    render() {
        const total = this.countTotalFeedback(); 
        return (
            <>
  
                <GlobalStyles/>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.heandlerClick}
                    />
                </Section>

                <Section title="Statistics">
                    {total === 0 ?
                        (<Notification
                            message="There is no feedback"
                        />)
                        :
                        (<Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />)
                    }
                    
                </Section>
                                       
            </>
        )
    }   
}


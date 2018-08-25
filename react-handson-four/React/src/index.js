import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            enrolledStudents: 100,
            waitlistedStudents: 50,
            addEnrolled: 0,
            addWaitlisted: 0
        }; 
    } 
    enrolledSButton() {
            this.setState({ 
                enrolledStudents: this.state.enrolledStudents + 1 });
    }
    waitlistedSButton() {
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + 1
        });
    }
    enrolledIncrement() {
        this.setState({ 
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addEnrolled)
        });
    }
    waitlistedIncrement() {
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitlisted)
        });
    }
    render() {
        return(
            <div>
                {/* Enrolled Students */}
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button onClick={this.enrolledSButton.bind(this)}>Add Enrolled Student</button>
                <h3>Add More Enrolled Students</h3>
                <input type="number" onChange={event => this.setState({ addEnrolled: event.target.value })}
                value={this.state.addEnrolled} />
                <button onClick={this.enrolledIncrement.bind(this)}>Add Students</button>

                {/* Waitlisted Students */}
                <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
                <button onClick={this.waitlistedSButton.bind(this)}>Add Waitlisted Student</button>
                <h3>Add More Waitlisted Students</h3>
                <input type="number" onChange={event => this.setState({ addWaitlisted: event.target.value })}
                value={this.state.addWaitlisted} />
                <button onClick={this.waitlistedIncrement.bind(this)}>Add Students</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
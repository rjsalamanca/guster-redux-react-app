import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_name, set_activity } from '../redux/actions/actions';

class Guster extends Component {
    state = {
        inputName: '',
        inputActivity: ''
    }

    handleName(e) {
        this.setState({
            inputName: e.target.value
        })


    }

    handleActivity(e) {
        this.setState({
            inputActivity: e.target.value
        })
    }


    render() {
        const { name, activity, set_name, set_activity } = this.props;
        const { inputName, inputActivity } = this.state;
        return (
            <div>
                <h2>Name: {name}</h2>
                <h2>Activity: {activity}</h2>

                <input type='text' name="name" onChange={(e) => this.handleName(e)} /><br />
                <button onClick={() => set_name(inputName)}>Set Name</button><br /> <br />
                <input type='text' name="name" onChange={(e) => this.handleActivity(e)} /><br />
                <button onClick={() => set_activity(inputActivity)}>Set Activity</button><br /> <br />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { name, activity } = state;
    return name, activity;
}

const mapDispatchToProps = dispatch => {
    return {
        set_name: (name) => dispatch(set_name(name)),
        set_activity: (activity) => dispatch(set_activity(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guster);
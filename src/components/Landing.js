import React, { Component } from 'react';

class Landing extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <hr />
        <h3>Featured Teachers</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Topic" ref={ (input) => this.topic = input } />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Landing;

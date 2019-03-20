import React from 'react';

class TodoFilter extends React.Component {
  render() {
    return (
      <div>
        <a href="" name="All" onClick={this.props.handleFilter}>
          All
        </a>
        <a href="" name="Active" onClick={this.props.handleFilter}>
          Active
        </a>
        <a href="" name="Completed" onClick={this.props.handleFilter}>
          Completed
        </a>
      </div>
    );
  }
}

export default TodoFilter;

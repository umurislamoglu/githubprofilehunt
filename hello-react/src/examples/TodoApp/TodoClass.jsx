import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Action from "./Action";

export default class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      items: ["item1", "item2"],
    };
  }

  componentDidMount() {
    const json = localStorage.getItem("items");
    const items = JSON.parse(json);
    if (items) {
      this.setState({
        items: items,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem("items", json);
    }
  }

  componentWillUnmount() {
    console.log("component silindi");
  }

  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.items.filter((i) => {
        return item !== i;
      });
      return {
        items: arr,
      };
    });
  }

  clearItems() {
    this.setState({
      items: [],
    });
  }

  addItem(item) {
    if (!item) {
      return "To Do giriniz!";
    } else if (this.state.items.indexOf(item) > -1) {
      return "Aynı elemanı ekleyemezsiniz";
    }

    this.setState((prevstate) => {
      return { items: prevstate.items.concat(item) };
    });
  }

  render() {
    const app = {
      title: "To do Application",
      description: "List of tasks to do !",
    };

    return (
      <div className="container my-5">
        <div className="card border-secondary text-center">
          <div className="card-header bg-transparent">
            <Header title={app.title} description={app.description} />
          </div>
          <div className="card-body text-secondary ">
            <TodoList
              items={this.state.items}
              deleteItem={this.deleteItem}
              clearItems={this.clearItems}
            />
          </div>
          <div className="card-footer bg-transparent text-secondary">
            <Action addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { form, button, input } from "reactstrap";

let styles = {
    card: {
        width: "40%",
        margin: "auto"
    }
}

class QuestList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.addQuest = this.addQuest.bind(this);
        this.removeQuest = this.removeQuest.bind(this);
    }
    addQuest(e) {
        e.preventDefault();
        let list = this.state.list;
        const newQuest = document.getElementById("addInput");
        const form = document.getElementById("addQuestForm");

        if (newQuest.value !== "") {
            list.push(newQuest.value);
            this.setState({
                list: list
            });
            newQuest.classList.remove("Quest-completed");
            form.reset();
        } else {
            newQuest.classList.add("New-Quest")
        }
    }

    removeQuest(quest) {
        const list = this.state.list.slice();
        list.some((la, i) => {
            if (la === quest) {
                list.splice(i, 1);
                return true;
            }
        });

        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <ul>
                            {this.state.list.map(Quest => (
                                <li key={Quest}>{Quest} &nbsp;
                                    <button className="delete" onClick={() => this.removeQuest(Quest)}>Quest completed!</button>
                                </li>))}
                        </ul>
                    </section>
                    <hr />
                    <section className="section">
                        <form className="form" id="addQuestForm">
                            <input
                                type="text"
                                className="input"
                                id="addInput"
                                placeholder="add to-do list item"
                            />
                            <button className="button is-info" onClick={this.addQuest}>
                                Add Quest
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default QuestList;
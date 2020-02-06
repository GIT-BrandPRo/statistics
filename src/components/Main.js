import {Button, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch, Route,
    Link
} from "react-router-dom";
import {All, Events, AllEvents} from "./eventFilters";
import {Today, Yesterday, Week, Month, Year, Quarter} from "./dateFilters";
import React, {Component} from 'react';
import DatePicker from "../containers/DatePicker";
import Graphs from "./Graphs";

export default class Main extends Component {

    state = {}

    render() {
        return (
            <Router>
                <div>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/All">ОБЩАЯ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Events">СОБЫТИЯ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/AllEvents">ПО ВСЕМ СОБЫТИЯМ</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/Today">Сегодня</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Yesterday">Вчера</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Week">Неделя</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Month">Месяц</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Year">Год</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Quarter">Квартал</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div>
                        <DatePicker/>
                        <Button variant="link">Reload</Button>
                        <Button variant="link">Export XLS</Button>
                    </div>

                    <Switch>
                        <Route exact path="/All">
                            <All/>
                        </Route>
                        <Route exact path="/Events">
                            <Events/>
                        </Route>
                        <Route exact path="/AllEvents">
                            <AllEvents/>
                        </Route>

                        <Route exact path="/Today">
                            <Today/>
                        </Route>
                        <Route exact path="/Yesterday">
                            <Yesterday/>
                        </Route>
                        <Route exact path="/Week">
                            <Week/>
                        </Route>
                        <Route exact path="/Month">
                            <Month/>
                        </Route>
                        <Route exact path="/Year">
                            <Year/>
                        </Route>
                        <Route exact path="/Quarter">
                            <Quarter/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        )
    }
}
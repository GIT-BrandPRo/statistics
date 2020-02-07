import {DatePicker, Button} from 'antd';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import {All, Events, AllEvents} from "./eventFilters";
import {Today, Yesterday, Week, Month, Year, Quarter} from "./dateFilters";
import React, {Component} from 'react';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Button style={{margin: 10}} href="/All">ОБЩАЯ</Button>
                    <Button style={{margin: 10}} href="/Events">СОБЫТИЯ</Button>
                    <Button style={{margin: 10}} href="/AllEvents">ПО ВСЕМ СОБЫТИЯМ</Button>
                    <div>
                        <Button style={{margin: 10}} href="/Today">СЕГОДНЯ</Button>
                        <Button style={{margin: 10}} href="/Yesterday">ВЧЕРА</Button>
                        <Button style={{margin: 10}} href="/Week">НЕДЕЛЯ</Button>
                        <Button style={{margin: 10}} href="/Month">МЕСЯЦ</Button>
                        <Button style={{margin: 10}} href="/Year">ГОД</Button>
                        <Button style={{margin: 10}} href="/Quarter">КВАРТАЛ</Button>
                    </div>
                    <div style={{display: "inline-flex"}}>

                        {window.location.href === "http://localhost:3000/Week" ? <RangePicker onChange={onChange}/> :
                            <DatePicker/>}
                        <Button style={{margin: 10}} variant="link">Reload</Button>
                        <Button style={{margin: 10}} variant="link">Export XLS</Button>
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
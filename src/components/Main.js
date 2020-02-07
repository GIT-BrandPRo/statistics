import React from "react";
import {DatePicker, Button} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Menu, Dropdown, Icon} from 'antd';
import {Row, Col} from 'antd';
import {Line} from 'react-chartjs-2';

function Main() {

    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

// const todayPickerDef = moment(new Date(), dateFormat)

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    const [data, setData] = useState([]);
    const [actionType, setActionType] = useState("Зашел в алгоритмы");
    const [allCount, setAllCount] = useState('');
    const [count, setCount] = useState([]);
    const [time, setTime] = useState([]);
    const [dataUrl, setDataUrl] = useState('data.json');
    const graphData = {
        labels: time,
        datasets: [
            {
                label: '',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: count
            }
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(dataUrl);
            setData(res.data);
        };
        fetchData();

    }, [dataUrl]);

    const todayHandler = (type) => {
        console.log(type)
        setCount(data[type === "Зашел в алгоритмы" ? 0 : 1].data.map(item => item.count))
        setTime(data[type === "Зашел в алгоритмы" ? 0 : 1].data.map(item => item.time))
    }

    const allCountHandler = (type) => {
        setAllCount(data[type === "Зашел в алгоритмы" ? 0 : 1].count)
    }

    const actionTypeHandler = (name) => {
        setActionType(name)
    }
    const actionsDropdown = (
        <Menu>
            {data.map(item =>
                <Menu.Item onClick={() => {
                    actionTypeHandler(item.name)
                    todayHandler(actionType)
                    allCountHandler(actionType)
                }}>
                    <a href="#">
                        {item.name}
                    </a></Menu.Item>)}
        </Menu>
    );


    return (
        <div>
            <div style={{margin: 10}}>
                <Button>ОБЩАЯ</Button>
                <Button>СОБЫТИЯ</Button>
                <Button>ПО ВСЕМ СОБЫТИЯМ</Button>
                <hr/>
            </div>
            <div>
                <Button>СЕГОДНЯ</Button>

                <Button>ВЧЕРА</Button>

                <Button>НЕДЕЛЯ</Button>

                <Button>МЕСЯЦ</Button>

                <Button>ГОД</Button>

                <Button>КВАРТАЛ</Button>
            </div>
            <hr/>
            <div style={{margin: 10}}>
                <Dropdown.Button overlay={actionsDropdown}>
                    <a className="ant-dropdown-link" href="#">
                        Actions
                    </a>
                </Dropdown.Button>
                <DatePicker style={{margin: 10}} defaultValue={moment(new Date(), dateFormat)} format={dateFormat}/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{flex: 1, margin: 10}}>
                    <Row>
                        <Col>{allCount}</Col>
                    </Row>
                </div>
                <div style={{flex: 3}}>
                    <Line data={graphData}/>
                </div>
            </div>
        </div>
    );
}

export default Main
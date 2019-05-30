import React from 'react'
import './calendar.css'
import { Header, Segment, Table } from 'semantic-ui-react'

let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthWithYear = monthsOfYear[currentMonth]

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

class CalendarScheduler extends React.Component {
   
    createTable = () => {
        let firstDayOfMonth = (new Date(currentYear, currentMonth)).getDay();
        let ld = (new Date(today.getFullYear(), today.getMonth() + 1, 0));
        let lastDayOfMonth = ld.getDate();
        let dateDay = 1;
        let table = []
        for (let i = 0; i < 6; i++) {
            let children = []
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                     children.push(<Table.Cell key={j} className="dayOff"></Table.Cell>)
                }
                else if (dateDay > daysInMonth(currentMonth, currentYear)) {
                    break;
                }
                else {
                    if (dateDay === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                         children.push(<Table.Cell key={j} id={dateDay} className="todayCalendar">{dateDay}</Table.Cell>) 
                    }

                    children.push(<Table.Cell key={j} id={dateDay}>{dateDay}</Table.Cell>)
                    dateDay++;

                    if(dateDay > lastDayOfMonth){
                        children.push(<Table.Cell key={dateDay} className="dayOff" ></Table.Cell>)
                    }
                }

            }
            table.push(<Table.Row key={i} children={children} />)
        }
        return table
    }

    render() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const listDays = daysOfWeek.map((dayName) =>
            <Table.HeaderCell key={dayName.toString()}>{dayName}</Table.HeaderCell>
        )
        return (
            <div className="masterContent">
                <Header as='h2' attached='top' className="titleCaledar">
                    {monthWithYear} {currentYear}
                </Header>
                <Segment attached>
                    <Table celled fixed singleLine>
                        <Table.Header>
                            <Table.Row>
                                {listDays}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.createTable()}
                        </Table.Body>
                    </Table>
                </Segment>
            </div>
        )
    }
}

export default CalendarScheduler;
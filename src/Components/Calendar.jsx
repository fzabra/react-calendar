import React from 'react'
import './calendar.css'
import { Header, Segment, Table } from 'semantic-ui-react'

class CalendarScheduler extends React.Component {
    createTable = () => {
       // let firstDayOfMonth = (new Date(currentYear, currentMonth)).getDay();
        // console.log(firstDayOfMonth);
        let dateDay = 1;
        // let dayOfTheMonth = []
        // let weekOfTheMonth = []
        let table = []
        for (let i = 0; i < 6; i++) {
            let children = []
            for (let j = 0; j < 7; j++) {
                children.push(<Table.Cell>{`Column ${j + 1}`}</Table.Cell>)
                // if (i === 0 && j < firstDayOfMonth) {
                //     //console.log("j: "+ j +" ---- i: "+i)
                // }
                // else if (dateDay > daysInMonth(currentMonth, currentYear)) {
                //     break;
                // }
                // else {
                    // console.log(dateDay)
                    // dayOfTheMonth += <div>{dateDay}</div>
                    // let myJSON = JSON.stringify(dateDay);
                    // console.log("json: "+myJSON)
                    
                    // if (dateDay === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                        
                    // }
                    dateDay++;
                    // console.log("++ " + dateDay++)
                // }
                table.push(<Table.Row>{children}</Table.Row>)
            }
        }
        return table
    }
    
    // function daysInMonth(iMonth, iYear) {
    //     return 32 - new Date(iYear, iMonth, 32).getDate();
    // }
    render() {
        let today = new Date()
        // let currentDay = today.getDate()
        let currentMonth = today.getMonth()
        let currentYear = today.getFullYear()
        let monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let monthWithYear = monthsOfYear[currentMonth] 
        console.log(today)
        
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const listDays = daysOfWeek.map((dayName) =>
            <Table.HeaderCell key={dayName.toString()}>{dayName}</Table.HeaderCell> 
        )
        return (
            <div className="masterContent">
                {/* <div>{currentDay}</div>
                <div>{currentMonth}</div> */}
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
                        {/* <Table.Row>
                            <Table.Cell>{dayOfTheMonth}</Table.Cell>
                        </Table.Row> */}
                    </Table.Body>
                </Table>
                </Segment>
            </div>
        )
    }
}

export default CalendarScheduler;
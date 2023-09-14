import { prependOnceListener } from "process";
import React from 'react'

interface PeopleInformation{
    id:string;
    password:string;
    mail:string;
    icon:string;
    authentication:string;
}
export default function UserList(props:any){
    var people : PeopleInformation[] = props.people; 
    const information = people.map((person,index)=>
    <tr key={index}>
        <td>{person.id}</td>
        <td>{person.password}</td>
        <td>{person.mail}</td>
        <img src = {person.icon}/>
        <td>{person.authentication}</td>
    </tr>
    );
    return(
    <table id="data-table">
        <thead><tr><th>ID</th><th>パスワード</th><th>メールアドレス</th><th>アイコン</th><th>種別</th></tr></thead>
    <tbody>{information}</tbody>
    </table>
    );
}

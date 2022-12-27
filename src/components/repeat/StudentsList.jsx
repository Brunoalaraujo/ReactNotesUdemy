import React from "react";
import students from "../../data/students";

export default props => {

    const studentList = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} -> {student.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {studentList}
            </ul>
        </div>
    )
}
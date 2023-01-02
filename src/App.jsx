import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Input from "./components/from/input";
import IndirectlyFather from "./components/comunication/IndirectlyFather";
import DirectlyFather from "./components/comunication/DirectlyFather";
import UserInfo from "./components/conditional/UserInfo";
import EvenOdd from "./components/conditional/EvenOdd";
import TableProducts from "./components/repeat/TableProducts";
import StudentsList from "./components/repeat/StudentsList";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import RandomNumb from "./components/basic/RandomNumb";
import Fragment from "./components/basic/Fragment";
import WithParam from "./components/basic/WithParam";
import First from "./components/basic/First";
import Input from "./components/myFrom/input";

export default props =>
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="app__cards">
            <Card title = "#11 - Componente Controlado" color="#">
                <Input/>
            </Card>
            <Card title="#10 - Comunicação Indireata" color="#8BAD39">
                <IndirectlyFather/>
            </Card>
            <Card title="#09 - Comunicação Direta" color="#59323C">
                <DirectlyFather/>
            </Card>
            <Card title="#08 - Renderização Condicional" color="#982395">
                <EvenOdd number={11} />
                <UserInfo user={{ name: "Bruno" }} />
                <UserInfo user={{ email: "Bruno" }} />
            </Card>
            <Card title="#07 - Desafio Repetição" color="#FF432E">
                <TableProducts />
            </Card>
            <Card title="#06 - Repetição" color="#FF4C65">
                <StudentsList />
            </Card>
            <Card title="#05 - Componentes com Filhos" color="#00C8F8">
                <Family lastname="Silva">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Gustavo" lastname="Fernandes" />
                </Family>
            </Card>
            <Card title="#04 - Desafio Aleaório" color="#FA6900">
                <RandomNumb
                    min={1}
                    max={60} />
            </Card>
            <Card title="#03 - Fragmento" color="#E94C6F">
                <Fragment />
            </Card>
            <Card title="#02 - Com Parâmetro" color="#E8B71A">
                <WithParam
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!" />
            </Card>
            <Card title="#01 - Primeiro" color="#588C73">
                <First />
            </Card>
        </div>
    </div>

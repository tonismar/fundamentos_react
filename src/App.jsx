import './App.css'
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/Contador/Contador'
import Mega from './components/mega/Mega'

const App = (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#1 - Primeiro Componente" color="#E94C6F">
                <Primeiro />
            </Card>
            <Card titulo="#2 - Com parâmetro" color="#DB3340">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
                <ComParametro titulo="Epa"
                    subtitulo="Opa" />
            </Card>
            <Card titulo="#3 - Com filhos" color="#008BBA">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#4 - Repetição" color="#8C4646">
                <Repeticao />
            </Card>
            <Card titulo="#5 - Condicional v1" color="#FBE2B4">
                <Condicional numero={10} />
            </Card>
            <Card titulo="#6 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={7} />
            </Card>
            <Card titulo="#7 - Comunicação Direta" color="#DD5F32">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#8 - Comunicação Indireta" color="#DD5F32">
                <Super></Super>
            </Card>
            <Card titulo="#9 - Input" color="#DD5F32">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Contador" color="#DD5F32">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#11 - Mega" color="#DD5F32">
                <Mega qtdeNumeros={8}></Mega>
            </Card>
        </div>

  </div>    
)

export default App
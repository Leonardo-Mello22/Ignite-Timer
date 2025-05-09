import { HistoryConteiner, HistoryLista, Status } from "./styles";

export function History(){
    return (
     <HistoryConteiner> 
        <h1> History</h1>

        <HistoryLista>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 min</td>
                        <td>2 meses</td>
                        <td>
                            <Status statusColor="green">Concluído</Status>                       
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 min</td>
                        <td>2 meses</td>
                        <td>
                            <Status statusColor="red">Interrompido</Status>                       
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 min</td>
                        <td>2 meses</td>
                        <td>
                            <Status statusColor="yellow">Analisando</Status>                       
                        </td>
                    </tr>
                </tbody>
            </table>
        </HistoryLista>
    </HistoryConteiner>  
)
}
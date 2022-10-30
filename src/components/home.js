
import { useState } from "react";

function Home() {

    const [projectlist, setProject] = useState([
        {
            id: 1, name: "Tic tac toe", complexity: "Medium", description: `Build a Tic-Tac-Toe game or “engine” that allows human players to play against each other
        Plug AIs into our Tic Tac Toe engine
        Repeatedly play AIs against each other to see which of them is the best`},
        { id: 2, name: "Rock paper scissor", complexity: "Simple", description: `Participants say “rock, paper, scissors” and then simultaneously form their hands into the shape of a rock (a fist), a piece of paper (palm facing downward), or a pair of scissors (two fingers extended). The rules are straightforward:
        Rock smashes scissors.
        Paper covers rock.
        Scissors cut paper.`  },
        { id: 3, name: "Random name generator", complexity: "Simple", description: `Generate list of random names based on User Input` },
        { id: 4, name: "Personality test", complexity: "Medium", description: `` },
        { id: 5, name: "Age Calculator", complexity: "Medium", description: `` },
    ])
    const [currentProject, setProjectName] = useState(projectlist[0].description)

    const handleProjectClick = (id) => {
        console.log(id)
        setProjectName(projectlist[id - 1].description)
    }

    return (
        <div className="container-fluid">
            <h3 className="mt-3">Choose your project!</h3>
            <div className="row">
                <div className="p-2 col-2">
                    <ul className="list-group">
                        {
                            projectlist.map((project) => (
                                <li onClick={() => handleProjectClick(project.id)} key={project.id} className="hoverli pb-2 list-group-item d-flex justify-content-between align-items-center">
                                    <div className="me-4">{project.name}</div>
                                    <span className={`badge bg-primary rounded-pill ${project.complexity == "Simple" ? "bg-success" : "bg-primary"}`}>
                                        {project.complexity}
                                    </span>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div className="p-2 display-5 flex-grow-1 col">
                    <blockquote class="blockquote">
                        <p>{currentProject}</p>
                    </blockquote>
                </div>
            </div>

        </div>
    )
}

export default Home;
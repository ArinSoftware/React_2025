import { createRoot } from "react-dom/client";

const rootElement = document.querySelector('#root');

function App() {
    return (
        <div>
            <Header />
            <TeamMembers />
        </div>

    )
}

function Header() {
    return (
        <div class="title">
            <h1>Team Members</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    ) 		
}

function TeamMembers() {
    return (
        <ul class="team">
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
        </ul>
    )
}

function TeamMember() {
    return (
        <li class="member co-funder">
            <div class="thumb"><img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120" /></div>
            <div class="description">
                <h3>Chris Coyier</h3>
                <p>Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.<br/><a href="https://codepen.io/chriscoyier/">@chriscoyier</a></p>
            </div>
        </li>
    )
}

createRoot(rootElement).render(
    <App />
);
const devsContainer = document.getElementById("devs");
const root = ReactDOM.createRoot(devsContainer)

root.render(<Home />)


function Home() {
    return (
        <div>
            <Top />
            <h2 id="title">Desenvolvedores</h2>
            <DevList />
        </div>
    );
}

function Top() {
    return (
        <div id="about-us">
            <h1>Sobre Nós</h1>
            <p>
                &#160;A equipe formada por desenvolvedores front-end e back-end do SENAC liderada pelo professor Igor Carneiro,<br/>
                criou um site para o Casa Cor com o tema "Corpo & Morada". Nosso objetivo foi <br/>
                unir tecnologia e design para explorar a relação entre o corpo humano e o espaço habitável.
            </p>
        </div>
    )
}


function DevList() {
    const devs = [
        {
            name: "Luiz Lara",
            desc: "Desenvolvedor Fullstack",
            avatar: "https://avatars.githubusercontent.com/u/62263833?v=4",
            linkedinQR: "https://i.postimg.cc/SKpZX8kk/llinkedin-tonho.png",
            gitUser: "luizinlara",
            gitLink: "https://github.com/luizinlara"
        },
        {
            name: "Ykaru",
            desc: "Desenvolvedor Frontend",
            avatar: "https://avatars.githubusercontent.com/u/147627870?v=4",
            linkedinQR: "https://i.postimg.cc/SKpZX8kk/llinkedin-tonho.png",
            gitUser: "ykaruus",
            gitLink: "https://github.com/ykaruus"
        },
        {
            name: "Diego Aurélio",
            desc: "Diretor de Arte",
            avatar: "https://avatars.githubusercontent.com/u/147538747?v=4",
            linkedinQR: "https://i.postimg.cc/SKpZX8kk/llinkedin-tonho.png",
            gitUser: "Diego-we",
            gitLink: "https://github.com/Diego-we"
        },
        {
            name: "Marco Antonio",
            desc: "Redator",
            avatar: "https://avatars.githubusercontent.com/u/67771574",
            linkedinQR: "https://i.postimg.cc/SKpZX8kk/llinkedin-tonho.png",
            gitUser: "tonho991",
            gitLink: "https://github.com/tonho991"
        }
    ]
    return devs.map(dev => (
        <div className="user-box">
            <img src={dev.avatar} alt="profile" id="profile-img" />
            <div className="info">
                <h2>{dev.name}</h2>
                <p>{dev.desc}</p>
            </div>
            <div className="social">
                <div className="social-box">
                    <img src={dev.linkedinQR} id="qrcode" />
                </div>
                <div className="social-box" onClick={() => {
                    window.location.href = dev.gitLink;
                }}>
                    <img src="/src/img/icons/github-mark-white.svg" alt="" />
                    <p>{dev.gitUser}</p>
                </div>
            </div>
        </div>
    ));
}
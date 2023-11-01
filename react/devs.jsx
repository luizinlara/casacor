const devsContainer = document.getElementById("devs");
const root = ReactDOM.createRoot(devsContainer)

const devs = [
    {
        name: "Marco Antonio",
        desc: "Redator",
        avatar: "https://avatars.githubusercontent.com/u/67771574",
        linkedinQR: "/src/qrcode/llinkedin-tonho.png",
        gitUser: "tonho991",
        gitLink: ""
    },
    {
        name: "Luis Lara",
        desc: "Desenvolvedor",
        avatar: "https://avatars.githubusercontent.com/u/62263833",
        linkedinQR: "/src/qrcode/llinkedin-tonho.png",
        gitUser: "luizinlara",
        gitLink: ""
    }
]

root.render(<DevList data={devs} />)

function DevList(data) {
    return data.data.map(dev => (
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
                    <div className="social-box">
                        <img src="/src/icons/github-mark-white.svg" alt="" />
                        <p>{dev.gitUser}</p>
                    </div>
                </div>
            </div>
        ));
}
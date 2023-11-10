const devsContainer = document.getElementById("devs");
const root = ReactDOM.createRoot(devsContainer)

const devs = [
    {
        name: "Marco Antonio",
        desc: "Redator",
        avatar: "https://avatars.githubusercontent.com/u/67771574",
        linkedinQR: "https://i.postimg.cc/SKpZX8kk/llinkedin-tonho.png",
        gitUser: "tonho991",
        gitLink: "https://github.com/tonho991"
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
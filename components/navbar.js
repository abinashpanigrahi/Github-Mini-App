const navbar = () => {
    return `<div id="navbar">
                <div id="main">
                    <div id="logo">
                        <a href="https://github.com">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
                        </a>
                </div>
                <div id="searchbox">
                    <input type="search" id="search" placeholder="Search or jump to..." />
                </div>
                <div id="links">
                    <ul id="options">
                        <li>Pull requests</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>
                </div>
                </div>

                <div id="user">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" id="profile" alt="profile">
                </div>
            </div>`
}


export default navbar;
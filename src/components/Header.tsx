import Search from './Search';

function Header() {
	return (
		<header className="header">
			<div className="header_content">
				<div className="header_gnb">
					<div className="logo">YouTube</div>
					<div className="form">
						<Search />
					</div>
				</div>
				<div className="header_fnb"></div>
			</div>
		</header>
	);
}

export default Header;

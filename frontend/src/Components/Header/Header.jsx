import { useSelector } from 'react-redux';
import './Header.css'
function Header(props) {
    const {setEdit}=props;
    const handleEdit = () => {
        setEdit(true)
    }
    const user = useSelector((state)=>state.user)
   
    return (
        <>
        <header 
        style={{
            backgroundColor:`${user.themeColor}`,
            backgroundImage:`linear-gradient(180deg,${user.themeColor} 2% , ${user.themeColor},65%,#181818 100%)` 
            }}>
            <div className="info-container">
                <div className="info-edit" onClick={handleEdit}>
                    Edit
                </div>
                <img src={user.avatarUrl} alt="redit" className="info-ava" />
                <div className="info-username">{user.name}</div>
                <div className="info-age">{user.age}</div>
                <div className="info-about">{user.about}</div>
            </div>
        </header>
        </>
      );
}

export default Header;
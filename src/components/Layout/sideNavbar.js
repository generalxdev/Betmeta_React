import styles from './sideNavbar.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { navButtons } from '../../assest/navButton';
import { useNavigate } from "react-router-dom";

function PageTemplate(props) {
     const navigate = useNavigate();
     return (
     <>
          <div className={styles.statusBar}>
               <div className={styles.statusInfo}>
                    <img src="./assets/logo.png" width="75px" height="57px"/>
                    <div style={{marginLeft: "20px"}}>
                         <span className={styles.logoFont} style={{color: "#F8BC66"}}> BET </span>
                         <span className={styles.logoFont} style={{color: "white"}}> META </span>
                    </div>
               </div>
               <div className={styles.statusInfo}>
                    <div> wallet connect  </div>
               </div>
          </div>
          <div className={styles.navBar}>
               <div className={styles.navButton}> 
                    <div onClick={()=>{navigate('/', { replace: true });}}> <img src="./assets/img/home.png" /> </div> Home 
                    <div className={styles.subtract}> <img src="./assets/img/subtract.png" /> </div>
               </div>
               <div className={styles.navButton}> 
                    <div onClick={()=>{navigate('/buy', { replace: true });}}> <img src="./assets/img/buy.png" /> </div> Buy 
                    <div className={styles.subtract}> <img src="./assets/img/subtract.png" /> </div>
               </div>
               <div className={styles.navButton}> 
                    <div onClick={()=>{navigate('/profile', { replace: true });}}> <img src="./assets/img/interface.png" /> </div> Profile 
                    <div className={styles.subtract}> <img src="./assets/img/subtract.png" /> </div>
               </div>
               <div className={styles.navButton}> 
                    <div onClick={()=>{navigate('/contact', { replace: true });}}> <img src="./assets/img/contact.png" /> </div> Join Us! 
                    <div className={styles.subtract}> <img src="./assets/img/subtract.png" /> </div>
               </div>
          </div>
     </>
  );
}

export default PageTemplate;
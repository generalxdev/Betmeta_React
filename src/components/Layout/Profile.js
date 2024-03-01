import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './Profile.module.scss';

const data=[
     {time:"14:50 02/23/2023", wagered: "$1.00", winOrLoss: "Win", profit: '+$25'},
     {time:"11:20 02/21/2023", wagered: "$1.00", winOrLoss: "Loss", profit: '-$1.00'},
     {time:"04:31 02/20/2023", wagered: "$1.00", winOrLoss: "Loss", profit: '-$1.00'},
     {time:"07:15 02/15/2023", wagered: "$1.00", winOrLoss: "Win", profit: '+$5.00'},
     {time:"20:46 02/01/2023", wagered: "$1.00", winOrLoss: "Loss", profit: '-$1.00'},
     {time:"19:58 01/30/2023", wagered: "$1.00", winOrLoss: "Win", profit: '+$150'},
];

function Profile() {
     const [tableData, setTableData] = useState([]);
     const getTableData = ()=>{
          setTableData(data.map((item)=>{
               return <tr key={item.time}>
                    <td style={{borderTopLeftRadius:'15px', borderBottomLeftRadius:'15px', paddingLeft:'20px'}}>{item.time}</td>
                    <td>{item.wagered}</td>
                    <td>{item.winOrLoss}</td>
                    <td style={{borderTopRightRadius:'15px', borderBottomRightRadius:'15px'}}> {item.profit} </td>
               </tr>
          }));
     }
     
     useEffect(()=>{
          getTableData();
          console.log(tableData);
     },[]);

     return (
    <div className={styles.Landing}>
          <div className={styles.container}>
               <div className={styles.profile}>
                    <div className={styles.userIcon}>
                         <div style={{border:"7px solid #F8BC66", borderRadius:"50%", width:'188px', height: '190px'}}><img src="./assets/img/account.png"/></div>
                         <div style={{marginTop: "20px"}} onClick={()=>{setTableData(data)}}><img src="./assets/img/changeUsernameButton.png" /> </div>
                    </div>
                    <div className={styles.profileDetails}>
                         <h1>No Username</h1>
                         <h2>0x00a329c0648769A73afAc7F9381E08FB43dBEA72</h2>
                         <h3>Memeber Since 07/21/2023</h3>
                    </div>
               </div>

               <div style={{display:'flex'}}>
                    <div className={styles.feature} style={{marginRight:'22px'}}>
                         <h1> Statistics </h1>
                         <div className={styles.option}>
                              <div>Wagered</div> <div>$1,256</div>
                         </div>
                         <div className={styles.option}>
                              <div>Bets</div> <div>753</div>
                         </div>
                         <div className={styles.option}>
                              <div>Bets Won</div> <div>250</div>
                         </div>
                         <div className={styles.option}>
                              <div>Bets Lost</div> <div>503</div>
                         </div>
                         <div className={styles.option}>
                              <div>Highest Win</div> <div>$155</div>
                         </div>
                         <div className={styles.option}>
                              <div>Profit</div> <div>+$26</div>
                         </div>
                    </div>
                    <div className={styles.feature}>
                         <h1> NFT Card </h1>
                         <div style={{width:'100%',textAlign:'center'}}><img src="./assets/img/nftCard.png"/></div>
                         <div className={styles.option}>
                              <div>Black Card #23</div> <div>$5,400 <div style={{color:"#595959"}}>Earned</div></div>
                         </div>
                    </div>
               </div>

               <div className={styles.history}>
                    <h1>History</h1>
                    <table style={{width:'100%'}}>
                         <thead>
                         <tr style={{width:'100%'}}>
                              <th width="40%" style={{paddingLeft:'70px'}}>Time</th>
                              <th width="25%">Wagered</th>
                              <th width="25%">Win/Loss</th>
                              <th width="10%">Profit</th>
                         </tr>
                         </thead>
                         <tbody>
                              {
                                   tableData
                              }
                         </tbody>
                    </table>
                    <div style={{marginTop:"15px",width:'100%', display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>
                         <div className={styles.pageSelector}>
                              <div className={styles.btn}><img src="./assets/img/prev.png" /></div>
                              <div> 1/13 </div>
                              <div className={styles.btn}><img src="./assets/img/next.png" /></div>
                         </div>
                    </div>
               </div>

               <div className={styles.selfExclusion}>
                    <div style={{width:'50%'}}>
                         <h1> Self-Exclusion </h1>
                         <div> <input type="text" value="1"/> &nbsp; Days </div>
                         <div style={{display:'flex', marginTop:'15px', width:'328px',justifyContent:'space-between'}}>
                              <div className={styles.btn}>Suspend</div>
                              <div className={styles.btn}>Permanently Suspend</div>
                         </div>
                    </div>
                    <div className={styles.details} style={{width:'50%',padding:"78px 64px"}}>
                          If you believe you have a gambling problem and are unable to exclude yourself from the game please select Permanently Suspend to ban your wallet. A suspension will allow for the currently connected wallet to be suspended for the determined amount of time. Please play responsibly.
                    </div>
               </div>
          </div>
    </div>
  );
}

export default Profile;
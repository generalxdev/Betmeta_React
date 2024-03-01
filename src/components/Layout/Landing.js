import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './Landing.module.scss';

function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.container}>
        <div className={styles.productLogo}>
            <div className={styles.productInfo}>
              <div className={styles.inputText}> PURCHASE YOUR NFT FOR</div>
              <div className={styles.inputText} style={{fontSize: '60px'}}> 
                <span style={{color: '#F8BC66'}}>PREMIUM</span> ACCESS
              </div>
              <div className={styles.inputText} style={{fontSize:"16px", fontWeight:'400', lineHeight: '20px'}}> 
                When you purchase a Black or Silver Card Bet Meta NFT you are earning monthly house profits paid to every single holder. They will also be subject to exclusive access to future updates and testing. Click the link below to go to OpenSea to purchase now!
              </div>
              <div className={styles.placeButton}> 
                <div className={styles.shopButton}> 
                  <img src="./assets/img/maskbutton.png" />
                  SHOP NFT
                </div>
              </div>
            </div>
            <img src="./assets/img/walletlogo.png" width="485"/>
        </div>

        <div className={styles.sections}>

          <div className={styles.body} style={{width: '300px'}}>
            <div style={{position:'absolute', left:'0', top:'0', width: '100%', height: '100%', opacity: "0.25", background: "#3A3A48", boxShadow: "80px 80px 80px", borderRadius: "9999px", filter: "blur(80px)"}}></div>
            <div className={styles.titleBar}>
              <div className={styles.title}> CASINO <div className={styles.description}>METAVERSE DEFI CASINO</div> </div>
              <div className={styles.tag}>
                <div style={{width:'100%', height:'33px', borderRadius:'15px', padding:'0px 5px', textAlign:'center', fontSize:'12px', display:'flex', justifyContent:'center', alignItems:'center'}}> 6208 online &nbsp; <span style={{display:'block',width: '5px', height: '5px', borderRadius:'2.5px', backgroundColor:'#93C049'}}> </span> </div>
              </div>
            </div>
            <div className={styles.mainboard}>
              <img src="./assets/img/casino.png" />
            </div>
            <div className={styles.playerButton}> PLAY &nbsp; <img src="./assets/img/player.png" /> </div>
          </div>

          <div className={styles.body} style={{width: '300px'}}>
            <div className={styles.titleBar}>
              <div className={styles.title}> FREE SPINS <div className={styles.description}>Awarded every single day!</div> </div>
            </div>
            <div className={styles.mainboard}>
              <img src="./assets/img/spin.png" style={{transform:"translate(0,-80px)"}}/>
            </div>
            <div className={styles.playerButton}> PLAY &nbsp; <img src="./assets/img/player.png" /> </div>
          </div>

          <div className={styles.body} style={{marginRight: '0px', width: 'calc(100% - 680px)'}}>
            <div className={styles.titleBar}>
              <div className={styles.title}> Performance <div className={styles.description}>Awarded every single day!</div> </div>
              <div className={styles.tag}>
                <img src="./assets/img/tokens.png" />
              </div>
            </div>
            <div className={styles.mainboard}>
              <div className={styles.feature}>
                Total Wagered
                <div style={{color:'#F8BC66', fontSize:'36px', lineHeight: '36px', letterSpacing: '0.72px', margin:"10px"}}>
                $205,376
                </div>
                <img src="./assets/img/total.png" />
              </div>

              <div className={styles.feature}>
                Total Bets
                <div style={{color:'#F8BC66', fontSize:'36px', lineHeight: '36px', letterSpacing: '0.72px', margin:"10px"}}>
                765,091
                </div>
                <img src="./assets/img/bets.png" />
              </div>

              <div className={styles.feature}>
                Total Wallets
                <div style={{color:'#F8BC66', fontSize:'36px', lineHeight: '36px', letterSpacing: '0.72px', margin:"10px"}}>
                10,256
                </div>
                <img src="./assets/img/total.png" />
              </div>
            </div>
            {/* <div className={styles.playerButton}> PLAY &nbsp; <img src="./assets/img/player.png" /> </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
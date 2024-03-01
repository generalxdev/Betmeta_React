import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './Buy.module.scss';

function Buy() {
  return (
    <div className={styles.Landing}>
     <div className={styles.container}>
          <div className={styles.maskrect}></div>
          <div className={styles.redeemBtn}>
               Redeem &nbsp;
               <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M10.9596 1.01041C11.1548 0.815145 11.1548 0.498563 10.9596 0.303301C10.7643 0.108038 10.4477 0.108039 10.2524 0.303301L5.65625 4.89949L1.06006 0.303301C0.864794 0.108039 0.548212 0.108038 0.352949 0.303301C0.157687 0.498563 0.157687 0.815145 0.352949 1.01041L5.3027 5.96015C5.49796 6.15542 5.81454 6.15542 6.0098 5.96015C6.00997 5.95999 6.01013 5.95983 6.0103 5.95966L10.9596 1.01041Z" fill="white"/>
               </svg>
          </div>
          <div style={{border:"10px solid black", height: "113px", width:'113px', borderRadius:'50%', zIndex:'5'}}>
               <img src="./assets/img/buyIcon.png" width="113" height="113"/>
          </div>
          <div className={styles.tokenBar}>
               <div className={styles.tokenIcon}> <img src="./assets/img/token.png" width="57" height="57"/> </div>
               <div className={styles.tokenDetails}>
                    <h1> 1000 </h1>
                    <div style={{width: '100%', height: '30px', textAlign:'right', color: 'rgba(123, 123, 123, 1)'}}> Balance: 4172 </div>
               </div>
          </div>
          <img src="./assets/img/exchange.png" />
          <div className={styles.tokenBar}>
               <div className={styles.tokenIcon}>
                    <img src="./assets/img/USDT.png" width="57" height="57"/> &nbsp;
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M10.9596 1.01041C11.1548 0.815145 11.1548 0.498563 10.9596 0.303301C10.7643 0.108038 10.4477 0.108039 10.2524 0.303301L5.65625 4.89949L1.06006 0.303301C0.864794 0.108039 0.548212 0.108038 0.352949 0.303301C0.157687 0.498563 0.157687 0.815145 0.352949 1.01041L5.3027 5.96015C5.49796 6.15542 5.81454 6.15542 6.0098 5.96015C6.00997 5.95999 6.01013 5.95983 6.0103 5.95966L10.9596 1.01041Z" fill="white"/>
                    </svg>
               </div>
               <div className={styles.tokenDetails}>
                    <h1> 1000 </h1>
                    <div className={styles.balanceDetails}>
                         <div>$999.98</div>
                         <div>Balance: 20156.25</div>
                    </div>
               </div>
          </div>
     </div>
    </div>
  );
}

export default Buy;
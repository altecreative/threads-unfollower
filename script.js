(async () => {
  // 1. Select the "Following" button using the exact class structure
  const targetButtonClass = '.x1i10hfl.xjbqb8w.x1ypdohk.xdl72j9.x2lah0s.x3ct3a4.xdj266r.x14z9mp.xat24cr.x1lziwak.x2lwn1j.xexx8yu.x18d9i69.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.x16qb05n.xi7iut8.x1dm3dyd.x1pv694p.x9f619.x3nfvp2.x1s688f.x90ne7k.xl56j7k.x193iq5w.xf7dkkf.xv54qhq.x1g2r6go.x12w9bfk.x11xpdln.xz4gly6.x87ps6o.xuxw1ft.x19kf12q.xz6dhga.x79t38.x1qv9dbp.x121z25r.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.x178xt8z.x1lun4ml.xso031l.xpilrb4.x1r0l4h4.xwsj4vy';
  const followingButtons = document.querySelectorAll(targetButtonClass);

  console.log(`Found ${followingButtons.length} following buttons.`);

  for (let button of followingButtons) {
    // Text check to filter out unrelated buttons (Is it "Following"?)
    if (button.textContent.includes('Following') || button.textContent.includes('Takip')) {
      
      console.log('Clicking the "Following" button...');
      button.click();
      
      // Wait 600ms for the popup to load
      await new Promise((resolve) => setTimeout(resolve, 600));
      
      // 2. Target the red "Unfollow" button inside the opened popup using its class
      const popupConfirmClass = '.x1i10hfl.xjqpnuy.xc5r6h4.xqeqjp1.x10w94by.x9f619.x2lah0s.x3ct3a4.xdj266r.x14z9mp.xat24cr.x1lziwak.x2lwn1j.xeuugli.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1fmog5m.xu25z0z.xo1y3bh.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.x78zum5.x1iyjqo2.xl56j7k.x18xmwgd.xpp8er5.x1t7ytsu.xpilrb4';
      const confirmButton = document.querySelector(popupConfirmClass);
      
      if (confirmButton) {
        console.log('Confirmation popup button found, clicking "Unfollow"...');
        confirmButton.click();
      } else {
        // Fallback: If the class doesn't match perfectly, search by text inside the popup
        console.log('Confirmation button not found by class, searching by text...');
        const alternativeButtons = document.querySelectorAll('span, div[role="button"]');
        for (let altBtn of alternativeButtons) {
          if (altBtn.textContent.trim() === 'Unfollow' || altBtn.textContent.trim() === 'Takibi Bırak') {
            altBtn.click();
            break;
          }
        }
      }
      
      // Safe delay between operations to prevent account restriction (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
  console.log('Unfollow process completed.');
})();
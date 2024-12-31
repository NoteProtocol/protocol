import React from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

const timelineData = [
  { date: '2023/12/31', title: 'Protocol Release', content: 'Prototype design from NOTE.SV', link: 'https://note.sv' },
  { date: '2024/1/1', title: 'Protocol Website Construction', content: 'Publish detailed protocol content' },
  { date: '2024/2/5', title: 'Open Source First Smart Contract', content: 'Demonstrate mining halving', link: 'https://github.com/NoteProtocol/scryptdemo' },
  { date: '2024/2/14', title: 'Deploy First N20 Token', content: 'Demonstrate and verify smart contract effectiveness', link: 'https://explorer.noteprotocol.org/n20/NOTE/Overview' },
  { date: '2023/3/7', title: 'Wallet APP Release', content: 'iOS/Android', link: 'https://chainbow.io' },
  { date: '2024/3/23 ~ 2024/5/9', title: 'Protocol Upgrade v2', content: 'UTXO binding/cross-chain' },
  { date: '2024/6/7', title: 'First DEX', content: 'Community-contributed NoteMarket', link: 'https://notemarket.io' },
  { date: '2024/7/23', title: 'Second DEX', content: 'UTXO.Exchange', link: 'https://utxo.exchange' },
  { date: '2024/7/29', title: 'Announce Bitcoin Action Protocol', content: 'Demonstrate Bitcoin Blinks technology', link: 'https://noteprotocol.org/blog/2024/07/29/bitcoin-action' },
  { date: '2024/7/21', title: 'FIGHT Born', content: 'First meme coin' , link: 'https://telegraphs.org/posts/how-to-mint-fight-token%20on%20bitcoin/'},
  { date: '2024/8/7', title: 'First Technical Lecture', content: 'Introduce Bitcoin knowledge to Builders', link:"https://chainbow.larksuite.com/docx/YE1xd7jRcowalRxIvrYuY1LgsDb" },
  { date: '2024/8/15', title: 'Develop Status Contract', content: 'more token templates for meme coins/royalties/mining' },
  { date: '2024/9', title: 'Release Action Protocol', content: 'Support P2P transactions' },
  { date: '2024/9', title: 'Listed on Exchange!', content: '$NOTE Has Been Listed on XT Exchange!', link: 'https://xtsupport.zendesk.com/hc/en-us/articles/37904317469081-XT-Announcement-on-Launching-NOTE-NOTE-Protocol' },
  { date: '2024/9 ~ 2024/10', title: 'NOTE DAO/Foundation', content: 'Community decentralized voting and co-building' },
  { date: '2024/10', title: 'Design Alias Protocol', content: 'Tradable public key aliases/mail system ' },
  { date: '2024/11', title: 'Design N721 NFT Protocol', content: 'Tradable digital rights' },
  // { date: '2024/12', title: 'Issue First Anniversary Commemorative NFT', content: 'For NOTE holders and community contributors' },
  // { date: '2025/1 ~ 2025/3', title: 'Open Source Distributed Indexer', content: 'Decentralized nodes, design node reward model' },
  { date: '2025/1 ~ ', title: 'Note Chain for AI Agent', content: 'Decentralized AI Blockchain' },
  // { date: '~ ~ ~ ~', title: 'To da moon', content: '🎉🎉🎉' },
];

const getCurrentYearMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}/${now.getMonth() + 1}`; // 移除了月份的前导零
};

const getTimeStatus = (date) => {
  const now = new Date();
  const currentYearMonth = getCurrentYearMonth();
  if (date === '~ ~ ~ ~') return 'future';
  const [startDate] = date.split(' ~ ');
  const [year, month] = startDate.split('/').map(Number);
  if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
    return 'past';
  } else if (startDate === currentYearMonth) {
    return 'current';
  } else {
    return 'future';
  }
};

const Timeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineTitle}>{translate({id: 'timeline.title', message: 'Timeline'})}</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => {
          const timeStatus = getTimeStatus(item.date);
          return (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={`${styles.timelineContent} ${styles[`color${index % 4}`]}`}>
                <div className={`${styles.timelineDate} ${styles[timeStatus]}`}>
                  {item.date}
                  {timeStatus === 'current' && <span className={styles.currentIcon}>🔴</span>}
                </div>
                <h3>{translate({id: `timeline.item.${index}.title`, message: item.title})}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.contentLink}>
                    <p>{translate({id: `timeline.item.${index}.content`, message: item.content})}</p>
                  </a>
                ) : (
                  <p>{translate({id: `timeline.item.${index}.content`, message: item.content})}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
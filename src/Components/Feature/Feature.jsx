import React from 'react';
import { Card, Button} from 'react-bootstrap';
import styles from './Feature.module.css'; 
import agreements from '../../assets/agreements.svg';
import contract from '../../assets/contract.svg';
import payments from '../../assets/payments.svg';
import secure from '../../assets/secure.svg';

export const Feature = () => {
	
	return (
		<div className={styles.featurebg}>
			<center><h1 className="display-2" >Features</h1></center>
			<div className={styles.maincards1}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={payments} />
					<Card.Body>
						<Card.Title>Transparancy</Card.Title>
						<Card.Text>
						Blockchain holds the promise of bringing greater efficiency and transparency to the payment procedure, for example, allowing cross-border transactions to be made in real-time and money to be exchanged at the speed with which information moves today.
						</Card.Text>						
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={agreements} />
					<Card.Body>
						<Card.Title>Decentralized Network</Card.Title>
						<Card.Text>
						A Blockchain is a decentralized database that stores a registry of assets and transactions across a peer-to-peer network. The “asset” may not only be money or transactional information, but also information regarding ownership, contracts, goods, and any other information. 
						</Card.Text>						
					</Card.Body>
				</Card>
			</div>
			<br />
			<div className={styles.maincards2}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={contract} />
					<Card.Body>
						<Card.Title>Smart Contract</Card.Title>
						<Card.Text>
						Once a smart contract is executed, payments are automatically deducted from a manufacturer's digital wallet and funds are moved into the supplier's digital wallet, so payment happens seamlessly. Smart contracts are coming because they have many tangible benefits. They reduce commerce friction, accelerate payments and make business more efficient.
						</Card.Text>						
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={secure} />
					<Card.Body>
						<Card.Title>Data Safety</Card.Title>
						<Card.Text>
						Blockchain platform ensures that your data is encrypted, which means that modification in data is a difficult task. You can also save a cryptographic signature of a document or file on a Blockchain. This would give users a way to ensure a file is un-tampered, without needing to save the entire file on the Blockchain. 
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}
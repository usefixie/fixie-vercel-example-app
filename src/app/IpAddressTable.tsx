import React from 'react';
import axios from 'axios';
import styles from './IpAddressTable.module.css';

interface IpifyResponse {
  ip: string
}

async function getVercelIp() {
  const res = await axios.get<IpifyResponse>('https://api.ipify.org?format=json');
  return res.data.ip;
}

async function getFixieIp(fixieUrl: URL) {
  const res = await axios.get<IpifyResponse>('https://api.ipify.org?format=json', {
    proxy: {
      protocol: 'http',
      host: fixieUrl.hostname,
      port: parseInt(fixieUrl.port, 10),
      auth: { username: fixieUrl.username, password: fixieUrl.password }
    }
  });
  return res.data.ip;
}

const MissingEnvironmentVariableWarning = () => (
  <div className={styles.warning}>
    <p><strong>To use Fixie, you must set the FIXIE_URL environment variable.</strong></p>
    <p>
      If you host this project on Vercel and enable the Fixie integration, FIXIE_URL will be set automatically.
      Otherwise, you can set it manually, e.g.: <code>FIXIE_URL=https://fixie:password@... npm run dev</code>.
    </p>
  </div>
);

export default async function IpAddressTable() {
  if (!process.env.FIXIE_URL) {
    return (<MissingEnvironmentVariableWarning />);
  }
  const fixieUrl = new URL(process.env.FIXIE_URL);
  const vercelIp = await getVercelIp();
  const fixieIp = await getFixieIp(fixieUrl);
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Outbound IP Address Without Fixie</th>
          <td>{vercelIp}</td>
        </tr>
        <tr>
          <th>Outbound IP Address With Fixie</th>
          <td>{fixieIp}</td>
        </tr>
      </tbody>
    </table>
  )
}
